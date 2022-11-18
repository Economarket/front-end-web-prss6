import { Category } from "../../services/models";
import { useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import { categories_mock } from "../../mock/mock";
import * as S from "../styles";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>(categories_mock);
  return (
    <S.Wrapper>
      <S.CardCategoryContainer>
        {categories.map((c) => (
          <CategoryCard
            category={c}
            onClick={() => console.log(`Redirect to ${c.name} page...`)}
          />
        ))}
      </S.CardCategoryContainer>
    </S.Wrapper>
  );
}
