import { Fragment, useCallback, useEffect, useState } from "react";
import IconSearch from "../../assets/icons/search";
import InputText from "../../components/InputText";
import ProductCard from "../../components/ProductCard";
import { searchProductByName } from "../../services/product";
import * as S from "../styles";
import * as I from "./index.styled";
import { Product as ProductModel } from "../../services/models";
import { useNavigate } from "react-router-dom";
import EmptyBox from "../../assets/emptyBox.png";
import { useDebounce } from "usehooks-ts";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";

const Product: React.FC = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductModel[]>();
  const [searchName, setSearchName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const debouncedSearch = useDebounce<string>(searchName, 500);
  const { callApi } = useInfiniteScroll({
    waitDispatchFinish: loading,
    changePxBottomBeforeCall: 200,
  });

  const searchProducts = useCallback(
    async (name: string) => {
      const data = await searchProductByName(name, 0);
      setProducts(data.content);
      setTotalPages(data.totalPages);
      setCurrentPage(0);
    },
    [setProducts, setTotalPages, setCurrentPage]
  );

  const loadProducts = useCallback(async () => {
    if(currentPage !== undefined && !!totalPages && currentPage < totalPages - 1){
      setLoading(true);
      const data = await searchProductByName(debouncedSearch, currentPage+1);
      setCurrentPage(currentPage + 1);
      setProducts(p => p?.concat(data.content));
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, totalPages]);

  useEffect(() => {
    if(callApi){
      loadProducts();
    }
  }, [loadProducts, callApi]);

  useEffect(() => {
    searchProducts(debouncedSearch);
  }, [searchProducts, debouncedSearch]);

  return (
    <S.Wrapper>
      <S.Title>Buscar Produtos</S.Title>
      <I.Header>
        <InputText
          name="buscaProduto"
          placeholder="Nome do produto"
          icon={<IconSearch />}
          iconPosition={"left"}
          onChange={(s) => setSearchName(s.target.value)}
        />
      </I.Header>
      <S.CardContainer>
        {products && products.length > 0 ? (
          <Fragment>
            <S.CardGridList>
              {products.map((p) => (
                <li>
                  <ProductCard product={p} />
                </li>
              ))}
            </S.CardGridList>
          </Fragment>
        ) : (
          <S.NoProductContainer>
            <S.NoProductImage src={EmptyBox} />
            <S.Title style={{ textAlign: "center" }}>
              Nenhum produto foi encontrado
            </S.Title>
            <S.NoProductButton
              onClick={() => navigate({ pathname: "/cadastrar-produto" })}
            >
              Deseja cadastrá-lo?
            </S.NoProductButton>
          </S.NoProductContainer>
        )}
      </S.CardContainer>
    </S.Wrapper>
  );
};

export default Product;
