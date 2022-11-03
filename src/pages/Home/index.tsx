import { useEffect, useState } from "react";
import { Category } from "../../services/models";
import { categories_mock, markets_mock } from "../../mock/mock";
import * as S from "../styles";
import CategoryCard from "../../components/CategoryCard";
import MarketCard from "../../components/MarketCard";

export default function Home() {

  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    setCategories(categories_mock);
  }, []);

  return (
    <S.Wrapper>
      <S.Text>Bem vindo a home!</S.Text>
      <div>
        {categories?.map(c => {
          return (<CategoryCard key={c.id} category={c} onClick={() => console.log(`Redirect to ${c.name} page...`)}/>)
        })}
      </div>
      <div>
        {markets_mock?.map(m => {
          return (<MarketCard market={m} onClick={() => console.log(`Redirect to ${m.name} page...`)}/>);
        })}
      </div>
    </S.Wrapper>
  );
}
