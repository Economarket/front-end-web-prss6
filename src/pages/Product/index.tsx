import { useCallback, useEffect, useState } from 'react';
import IconSearch from '../../assets/icons/search';
import InputText from '../../components/InputText';
import ProductCard from '../../components/ProductCard';
import { searchProductByName } from '../../services/product';
import * as S from '../styles';
import * as I from './index.styled';
import { Product as ProductModel } from '../../services/models';
import { useNavigate } from "react-router-dom";
import EmptyBox from "../../assets/emptyBox.png";

const Product: React.FC = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductModel[]>();
  const [searchName, setSearchName] = useState<string>("");

  const searchProducts = useCallback(async (name: string) => {
      const data = await searchProductByName(name);
      setProducts(data.content);
  }, [setProducts]);

  useEffect(() => {
    searchProducts("");
  }, [searchProducts]);

  return (
    <S.Wrapper>
      <S.Title>Buscar Produtos</S.Title>
      <I.Header>
        <InputText 
          name="buscaProduto" 
          placeholder="Nome do produto"
          icon={<IconSearch />}
          iconPosition={'left'}
          onChange={(s) => setSearchName(s.target.value)}
        />
        <I.Search onClick={() => searchProducts(searchName || "")}>Buscar</I.Search>
      </I.Header>
      <S.CardContainer>
        {(products && products.length > 0) ? (
          <S.CardGridList>
            {products.map((p) => (
              <li>
                <ProductCard product={p} onClick={() => console.log(p.name)} />
              </li>
            ))}
          </S.CardGridList>
        ) : (
          <S.NoProductContainer>
            <S.NoProductImage src={EmptyBox}/>
            <S.Title style={{textAlign: "center"}}>Nenhum produto foi encontrado</S.Title>
            <S.NoProductButton onClick={() => navigate({pathname: "/cadastrar-produto"})}>Deseja cadastrá-lo?</S.NoProductButton>
          </S.NoProductContainer>
        )}
    </S.CardContainer>
    </S.Wrapper>
  );
};

export default Product;