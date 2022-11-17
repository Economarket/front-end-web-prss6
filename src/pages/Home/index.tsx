import { useState } from 'react';
import Carousel from '../../components/Carousel';
import CategoryCard from '../../components/CategoryCard';
import MarketCard from '../../components/MarketCard';
import { categories_mock, markets_mock } from '../../mock/mock';
import { Category } from '../../services/models';
import * as S from '../styles';
import { CardsMarketContainer } from './styles';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>(categories_mock);
  return (
    <S.Wrapper>
      <Carousel>
        {categories.map((c) => (
          <CategoryCard
            category={c}
            onClick={() => console.log(`Redirect to ${c.name} page...`)}
          />
        ))}
      </Carousel>
      <CardsMarketContainer>
        {markets_mock?.map((m) => {
          return (
            <MarketCard
              key={m.id}
              market={m}
              onClick={() => console.log(`Redirect to ${m.name} page...`)}
            />
          );
        })}
      </CardsMarketContainer>
    </S.Wrapper>
  );
}
