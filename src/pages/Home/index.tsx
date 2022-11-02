import { useEffect, useState } from "react";
import { Category } from "../../services/models";
import { categories_mock } from "../../mock/mock";
import * as S from "../styles";
import CategoryCard from "../../components/CategoryCard";

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
          return (<CategoryCard category={c} onClick={() => null}/>)
        })}
      </div>
    </S.Wrapper>
  );
}
