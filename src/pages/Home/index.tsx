import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Carousel from "../../components/Carousel";
import CategoryCard from "../../components/CategoryCard";
import MarketCard from "../../components/MarketCard";
import { markets_mock } from "../../mock/mock";
import { getCategories } from "../../services/category";
import { Category } from "../../services/models";
import { Title } from "../../templates/ExternalLayout/styles";
import * as S from "../styles";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>();

  const updateCategories = useCallback(async () => {
    setCategories(await getCategories());
  }, []);

  useEffect(() => {
    updateCategories();
  }, [updateCategories]);
  
  return (
    <S.HomeContainer>
      <Title>Categorias</Title>
      {categories && <Carousel>
        {categories.map((c) => (
          <CategoryCard
            category={c}
            onClick={() => console.log(`Redirect to ${c.name} page...`)}
          />
        ))}
      </Carousel>}
      <br/><br/><br/>
      <Title>Mercados próximos</Title>
      <S.CardsMarketContainer>
        {markets_mock?.slice(0, 8).map((m) => {
          return (
            <MarketCard
              key={m.id}
              market={m}
              onClick={() => console.log(`Redirect to ${m.name} page...`)}
            />
          );
        })}
      </S.CardsMarketContainer>
    </S.HomeContainer>
  );
}
