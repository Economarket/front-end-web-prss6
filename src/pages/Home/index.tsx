import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import CategoryCard from "../../components/CategoryCard";
import MarketCard from "../../components/MarketCard";
import { getCategories } from "../../services/category";
import { Category, Market } from "../../services/models";
import CookieConsent from "react-cookie-consent";
import * as S from "../styles";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import { getMarketByDistance } from "../../services/market";
import { useLocalization } from "../../contexts/localization";
// import { isMobile } from "react-device-detect";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>();
  // const [showMobile, setShowMobile] = useState<boolean>(true);
  const [markets, setMarkets] = useState<Market[]>([]);
  const navigate = useNavigate();
  const { locateX, locateY, distance } = useLocalization();

  const updateCategories = useCallback(async () => {
    setCategories(await getCategories());
  }, []);

  const getMarkets = useCallback(async () => {
    try {
      if (locateX && locateY) {
        const response = await getMarketByDistance(distance, locateX, locateY);

        setMarkets(response);
      }
    } catch (error) {
      console.error(error);
    }
  }, [distance, locateX, locateY]);

  useEffect(() => {
    updateCategories();
    getMarkets();
  }, [updateCategories, getMarkets]);

  return (
    <S.HomeContainer>
      {/* <InstallAppModal
        isShown={isMobile && showMobile}
        close={() => setShowMobile(false)}
      /> */}
      <S.Title>Categorias</S.Title>
      {categories && (
        <Carousel>
          {categories.map((c) => (
            <CategoryCard
              category={c}
              onClick={() =>
                navigate({
                  pathname: "/categorias",
                  search: `category=${c.searchName}&external=true`,
                })
              }
            />
          ))}
        </Carousel>
      )}
      <S.Title>Mercados próximos</S.Title>
      <S.CardsMarketContainer>
        {markets.map((m) => {
          return (
            <MarketCard
              key={m.id}
              market={m}
              onClick={() =>
                navigate({
                  pathname: "/mercados-proximos",
                  search: `market=${m.name}&external=true`,
                })
              }
            />
          );
        })}
      </S.CardsMarketContainer>
      <CookieConsent
        location="bottom"
        buttonText="Aceitar"
        cookieName="refresh_token"
        style={{ background: theme.colors.blue200 }}
        buttonStyle={{
          color: theme.colors.whiteFull,
          backgroundColor: theme.colors.blue300,
          borderRadius: "5px",
          fontSize: "2rem",
          fontFamily: "Lato",
        }}
        expires={150}
      >
        <span style={{ fontFamily: "Lato", fontSize: "1.75rem" }}>
          Os cookies nesse site são necessários para o uso da aplicação. Além de
          melhorar a sua experiência. Você deseja aceitá-los ?
        </span>
      </CookieConsent>
    </S.HomeContainer>
  );
}
