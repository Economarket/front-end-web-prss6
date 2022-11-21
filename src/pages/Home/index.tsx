import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import CategoryCard from "../../components/CategoryCard";
// import MarketCard from "../../components/MarketCard";
import { getCategories } from "../../services/category";
import { Category } from "../../services/models";
import CookieConsent from "react-cookie-consent";
import * as S from "../styles";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>();
  const navigate = useNavigate();

  const updateCategories = useCallback(async () => {
    setCategories(await getCategories());
  }, []);

  useEffect(() => {
    updateCategories();
  }, [updateCategories]);

  return (
    <S.HomeContainer>
      <S.Title>Categorias</S.Title>
      {categories && (
        <Carousel>
          {categories.map((c) => (
            <CategoryCard
              category={c}
              onClick={() => navigate({
                pathname: '/categorias',
                search: `category=${c.searchName}&external=true`
              })}
            />
          ))}
        </Carousel>
      )}
      <br />
      <br />
      <br />
      <S.Title>Mercados próximos</S.Title>
      <S.CardsMarketContainer>
        {/*markets_mock?.slice(0, 8).map((m) => {
          return (
            <MarketCard
              key={m.id}
              market={m}
              onClick={() => console.log(`Redirect to ${m.name} page...`)}
            />
          );
        })*/}
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
