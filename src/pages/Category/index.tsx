import { Category, Product } from "../../services/models";
import { Fragment, useCallback, useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import * as S from "../styles";
import * as I from "./index.styled";
import { getCategories } from "../../services/category";
import InputText from "../../components/InputText";
import IconSearch from "../../assets/icons/search";
import IconChevronLeft from "../../assets/icons/chevronLeft";
import Select from "../../components/Select";
import { searchProductByCategory } from "../../services/product";
import ProductCard from "../../components/ProductCard";
import EmptyBox from "../../assets/emptyBox.png";
import useQuery from "../../hooks/use-query";
import { useNavigate } from "react-router-dom";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import EditPriceModal from "./components/EditPriceModal";
import AddShoppingListModal from "./components/AddShoppingListModal";
import { useDebounce } from "usehooks-ts";
import Loading, { LoadingType } from "../../components/Loading";

const Categories:React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useQuery();

  const [categories, setCategories] = useState<Category[]>();
  const [products, setProducts] = useState<Product[]>();
  const [currentCategory, setCurrentCategory] = useState<Category>();
  const [currentEditProduct, setCurrentEditProduct] = useState<Product>();
  const [currentSaveProduct, setCurrentSaveProduct] = useState<Product>();
  const [searchName, setSearchName] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  const searchDebounce = useDebounce(searchName, 500);

  const { callApi } = useInfiniteScroll({
    waitDispatchFinish: loading,
    changePxBottomBeforeCall: 200,
  });

  const updateCategories = useCallback(async () => {
    setCategories(await getCategories());
  }, []);

  const searchProducts = useCallback(async (category: Category, search: string | undefined) => {
    if(category){
      setLoading(true);
      const data = await searchProductByCategory(category.id, search, 0);
      setProducts(data.content);
      setTotalPages(data.totalPages);
      setCurrentPage(0);
      setLoading(false);
    }
  }, []);

  const loadProducts = useCallback(async () => {
    if(currentCategory && currentPage !== undefined && !!totalPages && currentPage < totalPages - 1){
      setLoading(true);
      const data = await searchProductByCategory(currentCategory.id, searchName, currentPage+1);
      setCurrentPage(currentPage + 1);
      setProducts(p => p?.concat(data.content));
      setLoading(false);
    }
  }, [currentCategory, currentPage, searchName, totalPages]);

  useEffect(() => {
    if(currentCategory){
      searchProducts(currentCategory, searchDebounce);
    }
  }, [currentCategory, searchDebounce, searchProducts]);

  useEffect(() => {
    if(callApi){
      loadProducts();
    }
  }, [loadProducts, callApi]);

  useEffect(() => {
    if(query.category && categories){
      const current = categories?.find((c) => (c.searchName === query.category));
      if(current){
        setCurrentCategory(current);
      } else {
        setCurrentCategory(undefined);
        setQuery({});
      }
    } else {
      setCurrentCategory(undefined);
    }
  }, [query, categories, setQuery]);

  useEffect(() => {
    updateCategories();
  }, [updateCategories]);

  useEffect(() => {
    if(currentCategory && query.external){
      setQuery({...query, external: undefined});
    }
  }, [searchProducts, query, currentCategory, setQuery]);

  return (
    <S.Wrapper>
      <EditPriceModal product={currentEditProduct} toggle={() => setCurrentEditProduct(undefined)}/>
      <AddShoppingListModal product={currentSaveProduct} toggle={() => setCurrentSaveProduct(undefined)}/>
      {categories && (!currentCategory ? (
        <Fragment>
          <S.Title>Categorias</S.Title>
          <S.CardContainer>
              <S.CardGridList>
                {categories.map((c) => (
                  <li>
                    <CategoryCard
                      category={c}
                      onClick={() => {
                        setQuery({category: c.searchName});
                      }}
                      />
                  </li>
                ))}
              </S.CardGridList>
          </S.CardContainer>
        </Fragment>
      ) : (
        <Fragment>
          <S.Title> Produtos</S.Title>
          <I.Header>
            <I.Back onClick={() => setQuery({category: undefined})}><IconChevronLeft/> Voltar</I.Back>
              <Select
                className="categories"
                isAutocomplete
                options={categories.map(c => ({label: c.name, value: c.id}))}
                placeholder="Selecione a categoria"
                onChange={(option) => {
                  const c = categories.find(c => (c.id === option.value));
                  if(c){
                    setQuery({category: c.searchName});
                  }
                }}
                value={{
                  label: currentCategory.name, 
                  value: currentCategory.id
                }}
              />
              <InputText 
                name="buscaProduto" 
                placeholder="Nome do produto"
                icon={<IconSearch />}
                iconPosition={'left'} 
                onChange={(s) => setSearchName(s.target.value)}
              />
          </I.Header>
          <S.CardContainer>
            {products && (
              (products.length > 0) ? (
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
              ) : (
                <S.NoProductContainer>
                  <S.NoProductImage src={EmptyBox}/>
                  <S.Title style={{textAlign: "center"}}>Nenhum produto foi encontrado</S.Title>
                  <S.NoProductButton onClick={() => navigate({pathname: "/cadastrar-produto"})}>Deseja cadastr??-lo?</S.NoProductButton>
                </S.NoProductContainer>
              ))
            }
          </S.CardContainer>
          <Loading loading={loading} type={LoadingType.spinningBubbles} />
        </Fragment>
      ))}
    </S.Wrapper>
  );
};

export default Categories;