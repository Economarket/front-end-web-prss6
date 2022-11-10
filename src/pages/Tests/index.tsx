import React, { useState } from 'react';
import { Category, Product } from "../../services/models";
import { categories_mock, markets_mock, products_mock } from "../../mock/mock";
import * as S from "../styles";
import CategoryCard from "../../components/CategoryCard";
import MarketCard from "../../components/MarketCard";
import Carousel from '../../components/Carousel';
import ProductCard from '../../components/ProductCard';

const Tests: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>(categories_mock);

    const InstaProducts = () => {
        const products: Product[] = [];
        for(let i = 0; i < 16; i++){
            products.push({
                "id": i+1,
                "name": `Produto Teste ${i+1}`,
                "price": i*Math.pow(1.23, i),
                "category": categories_mock[i],
                "brand": {
                    "brandName": `Marca ${i*10}`
                },
                "unity": "Kg",
            })
        }
        return products;
    };

  return (
    <S.Wrapper>
        <S.Text>Bem vindo a área de Testes!</S.Text>
        <Carousel>
            {categories.map(c => 
                <CategoryCard category={c} onClick={() => console.log(`Redirect to ${c.name} page...`)}/>
            )}
        </Carousel>
        <div style={{ margin: "5rem 0"}}>
            {markets_mock?.map(m => {
                return (<MarketCard key={m.id} market={m} onClick={() => console.log(`Redirect to ${m.name} page...`)}/>);
            })}
        </div>
        <div style={{display: "flex", justifyContent: "space-around", width: "100%"}}>
            {products_mock.map(p =>
                <ProductCard product={p} onClick={() => console.log(p.name)} />
            )}
        </div>
        <div style={{display: "flex", justifyContent: "space-around", width: "90%", height: "100vh",flexWrap: "wrap", margin: "10rem"}}>
            {InstaProducts().map(p =>
                <ProductCard product={p} onClick={() => console.log(p.name)} />
            )}
        </div>
    </S.Wrapper>
  );
};

export default Tests;
