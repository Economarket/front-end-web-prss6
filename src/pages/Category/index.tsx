import { Category } from '../../services/models';
import { useState } from 'react';
import CategoryCard from '../../components/CategoryCard';
import { categories_mock } from '../../mock/mock';
import { CardCategoryContainer, Wrapper } from './styles';

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>(categories_mock);
  return (
    <Wrapper>
      <CardCategoryContainer>
        {categories.map((c) => (
          <CategoryCard
            category={c}
            onClick={() => console.log(`Redirect to ${c.name} page...`)}
          />
        ))}
      </CardCategoryContainer>
    </Wrapper>
  );
}
