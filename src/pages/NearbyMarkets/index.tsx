import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "usehooks-ts";
import IconChevronLeft from "../../assets/icons/chevronLeft";
import IconSearch from "../../assets/icons/search";
import InputText from "../../components/InputText";
import MarketCard from "../../components/MarketCard";
import ProductCard from "../../components/ProductCard";
import RangeDistance from "../../components/RangeDistance";
import Select from "../../components/Select";
import { useLocalization } from "../../contexts/localization";
import { useInfiniteScroll } from "../../hooks/use-infinite-scroll";
import useQuery from "../../hooks/use-query";
import { getMarketByDistance } from "../../services/market";
import { Market, Product } from "../../services/models";
import { searchProductByMarket } from "../../services/product";

import EmptyBox from "../../assets/emptyBox.png";

import * as S from "../styles";

import * as I from "./styles";
import EditPriceModal from "../Product/components/EditPriceModal";

export default function NearbyMarkets() {
  const [markets, setMarkets] = useState<Market[]>();
  const { locateX, locateY, distance, setDistance } = useLocalization();
  const debounceDistance = useDebounce<number>(distance, 500);
  const [currentMarket, setCurrentMarket] = useState<Market>();
  const [products, setProducts] = useState<Product[]>();
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const [searchName, setSearchName] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>();
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useQuery();
  const navigate = useNavigate();
  const searchDebounce = useDebounce(searchName, 500);

  const { callApi } = useInfiniteScroll({
    waitDispatchFinish: loading,
    changePxBottomBeforeCall: 200,
  });

  const getMarkets = useCallback(async (dist: number, x: number, y: number) => {
    try {
      setMarkets(await getMarketByDistance(dist, x, y));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const searchProducts = useCallback(
    async (market: Market, search: string | undefined) => {
      if (market) {
        const data = await searchProductByMarket(market.id, search, 0);
        setProducts(data.content);
        setTotalPages(data.totalPages);
        setCurrentPage(0);
      }
    },
    []
  );

  const loadProducts = useCallback(async () => {
    if (
      currentMarket &&
      currentPage !== undefined &&
      !!totalPages &&
      currentPage < totalPages - 1
    ) {
      setLoading(true);
      const data = await searchProductByMarket(
        currentMarket.id,
        searchName,
        currentPage + 1
      );
      setCurrentPage(currentPage + 1);
      setProducts((p) => p?.concat(data.content));
      setLoading(false);
    }
  }, [currentMarket, currentPage, searchName, totalPages]);

  useEffect(() => {
    if (currentMarket) {
      searchProducts(currentMarket, searchDebounce);
    }
  }, [currentMarket, searchDebounce, searchProducts]);

  useEffect(() => {
    if (callApi) {
      loadProducts();
    }
  }, [loadProducts, callApi]);

  useEffect(() => {
    if (query.market && markets) {
      const current = markets?.find((m) => m.name === query.market);
      if (current) {
        setCurrentMarket(current);
      } else {
        setCurrentMarket(undefined);
        setQuery({});
      }
    } else {
      setCurrentMarket(undefined);
    }
  }, [query, markets, setQuery]);

  useEffect(() => {
    if (locateX && locateY && debounceDistance) {
      getMarkets(debounceDistance, locateX, locateY);
    }
  }, [debounceDistance, getMarkets, locateX, locateY]);

  useEffect(() => {
    if (currentMarket && query.external) {
      setQuery({ ...query, external: undefined });
    }
  }, [query, currentMarket, setQuery]);

  return (
    <S.Wrapper>
      <EditPriceModal
        product={currentProduct}
        toggle={() => setCurrentProduct(undefined)}
      />
      {markets &&
        (!currentMarket ? (
          <>
            <S.WrapperHead>
              <S.Title>Mercados próximos</S.Title>
              <S.WrapperRangeDistance>
                <S.WrapperTextFilter>
                  <S.TextFilter>Escolha o raio</S.TextFilter>
                  <S.TextFilter>{distance} km</S.TextFilter>
                </S.WrapperTextFilter>
                <RangeDistance defaultValue={distance} setValue={setDistance} />
              </S.WrapperRangeDistance>
            </S.WrapperHead>
            <S.CardsMarketContainer>
              {markets.map((m) => {
                return (
                  <MarketCard
                    key={m.id}
                    market={m}
                    onClick={() => {
                      setQuery({ market: m.name });
                    }}
                  />
                );
              })}
            </S.CardsMarketContainer>{" "}
          </>
        ) : (
          <>
            <S.Title> Produtos</S.Title>
            <I.Header>
              <I.Back onClick={() => setQuery({ market: undefined })}>
                <IconChevronLeft /> Voltar
              </I.Back>
              <Select
                className="markets"
                isAutocomplete
                options={markets.map((m) => ({ label: m.name, value: m.id }))}
                placeholder="Selecione a o mercado"
                onChange={(option) => {
                  const m = markets.find((m) => m.id === option.value);
                  if (m) {
                    setQuery({ market: m.name });
                  }
                }}
                value={{
                  label: currentMarket.name,
                  value: currentMarket.id,
                }}
              />
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
                <S.CardGridList>
                  {products.map((p) => (
                    <li>
                      <ProductCard
                        product={p}
                        onEditPrice={() => setCurrentProduct(p)}
                      />
                    </li>
                  ))}
                </S.CardGridList>
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
          </>
        ))}
    </S.Wrapper>
  );
}
