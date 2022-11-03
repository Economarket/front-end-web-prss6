import React, { useState } from 'react';
import { Category } from "../../services/models";
import { categories_mock, markets_mock } from "../../mock/mock";
import * as S from "../styles";
import CategoryCard from "../../components/CategoryCard";
import MarketCard from "../../components/MarketCard";
import Carousel from '../../components/Carousel';

const Tests: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>(categories_mock);

  return (
    <S.Wrapper>
        <S.Text>Bem vindo a área de Testes!</S.Text>
            <Carousel>
                {categories.map(c => 
                    <CategoryCard category={c} onClick={() => console.log(`Redirect to ${c.name} page...`)}/>
                )}
            </Carousel>
        <div>
            {markets_mock?.map(m => {
                return (<MarketCard key={m.id} market={m} onClick={() => console.log(`Redirect to ${m.name} page...`)}/>);
            })}
        </div>
    </S.Wrapper>
  );
};

export default Tests;
