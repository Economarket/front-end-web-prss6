import { Fragment, useCallback, useEffect, useState } from "react";
import IconSearch from "../../assets/icons/search";
import InputText from "../../components/InputText";
import ProductCard from "../../components/ProductCard";
import {
  searchProductByDistance,
  searchProductByName,
} from "../../services/product";
import * as S from "../styles";
import * as I from "./index.styled";
import { Product as ProductModel } from "../../services/models";
import { useNavigate } from "react-router-dom";
import EmptyBox from "../../assets/emptyBox.png";
import { useDebounce } from "usehooks-ts";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import EditPriceModal from "./components/EditPriceModal";
import Loading, { LoadingType } from "../../components/Loading";
import { useLocalization } from "../../contexts/localization";
import RangeDistance from "../../components/RangeDistance";
import ToggleSwitch from "../../components/ToggleSwitch";
import AddShoppingListModal from "./components/AddShoppingListModal";

const Product: React.FC = () => {
  const navigate = useNavigate();
  const { locateX, locateY, distance, setDistance } = useLocalization();

  const [products, setProducts] = useState<ProductModel[]>();
  const [currentEditProduct, setCurrentEditProduct] = useState<ProductModel>();
  const [currentSaveProduct, setCurrentSaveProduct] = useState<ProductModel>();
  const [searchName, setSearchName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [useLocation, setUseLocation] = useState<boolean>(false);

  const debounceDistance = useDebounce<number>(distance, 500);
  const debouncedSearch = useDebounce<string>(searchName, 500);
  const { callApi } = useInfiniteScroll({
    waitDispatchFinish: loading,
    changePxBottomBeforeCall: 100,
  });

  const searchProducts = useCallback(
    async (name: string, location: boolean) => {
      let data = null;
      setLoading(true);
      if (location && locateX && locateY) {
        data = await searchProductByDistance(
          debounceDistance,
          locateX,
          locateY,
          name,
          0
        );
      } else {
        data = await searchProductByName(name, 0);
      }
      setProducts(data.content);
      setTotalPages(data.totalPages);
      setCurrentPage(0);
      setLoading(false);
    },
    [locateX, locateY, debounceDistance]
  );

  const loadProducts = useCallback(async () => {
    if (
      currentPage !== undefined &&
      !!totalPages &&
      currentPage < totalPages - 1
    ) {
      setLoading(true);
      const data = await searchProductByName(debouncedSearch, currentPage + 1);
      setCurrentPage(currentPage + 1);
      setProducts((p) => p?.concat(data.content));
      setLoading(false);
    }
  }, [currentPage, debouncedSearch, totalPages]);

  useEffect(() => {
    if (callApi) {
      loadProducts();
    }
  }, [loadProducts, callApi]);

  useEffect(() => {
    searchProducts(debouncedSearch, useLocation);
  }, [searchProducts, debouncedSearch, useLocation]);

  return (
    <S.Wrapper>
      <EditPriceModal
        product={currentEditProduct}
        toggle={() => setCurrentEditProduct(undefined)}
      />
      <AddShoppingListModal
        product={currentSaveProduct}
        toggle={() => setCurrentSaveProduct(undefined)}
      />
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
      <I.Header>
        <span className="c-1">
          <p className="marketLabel">Produtos de mercados próximos</p>
          <ToggleSwitch
            checked={useLocation}
            onToggle={() => setUseLocation((l) => !l)}
          />
        </span>
        <span className="c-2">
          <div className="range">
            <RangeDistance
              show={useLocation}
              defaultValue={distance}
              setValue={setDistance}
              distance={distance}
            />
          </div>
        </span>
      </I.Header>
      <S.CardContainer>
        {products &&
          (products.length > 0 ? (
            <Fragment>
              <S.CardGridList>
                {products.map((p) => (
                  <li>
                    <ProductCard
                      product={p}
                      onEditPrice={() => setCurrentEditProduct(p)}
                      onAddProduct={() => setCurrentSaveProduct(p)}
                    />
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
          ))
        }
      </S.CardContainer>
      <Loading loading={loading} type={LoadingType.spinningBubbles} />
    </S.Wrapper>
  );
};

export default Product;
