import { Category } from "../../services/models";
import { useCallback, useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import * as S from "../styles";
import { getCategories } from "../../services/category";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>();

  const updateCategories = useCallback(async () => {
    setCategories(await getCategories());
  }, []);

  useEffect(() => {
    updateCategories();
  }, [updateCategories]);
  return (
    <S.Wrapper>
      <S.Title>Categorias</S.Title>

      <S.CardCategoryContainer>
        {categories &&
          categories.map((c) => (
            <CategoryCard
              category={c}
              onClick={() => console.log(`Redirect to ${c.name} page...`)}
            />
          ))}
      </S.CardCategoryContainer>
    </S.Wrapper>
  );
}
