import { categories_round_assets } from '../../assets/categories-round/categories-round';
import EditPrice from '../../assets/icons/editPrice';
import { Product } from '../../services/models';
import {
  Button,
  Container,
  EditButton,
  Image,
  ImageContainer,
  Info,
  InfoContainer,
  Name,
  Price,
} from './index.styled';

interface ProductCardProps {
  product: Product;
  onAddProduct?: () => void;
  onEditPrice?: () => void;
}
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddProduct, onEditPrice }) => {
  return (
    <Container>
      <EditButton onClick={onEditPrice}><EditPrice className='icon'/></EditButton>
      <ImageContainer>
        <Image
          alt={product.category.name}
          src={categories_round_assets[product.category.searchName]}
        />
        <Info>{product.category.name}</Info>
      </ImageContainer>
      <InfoContainer>
        <Name>
          {product.name}
          <Info>{product.brand.brandName}</Info>
        </Name>
        <Price color={
          product.greaterThanLastPrice === null 
            ? "#004068" 
            : product.greaterThanLastPrice 
            ? "#c00" 
            : "#0c0"}>
          {`R$ ${product.price.toFixed(2)} / ${product.unity}`}
        </Price>
        {product.markets && <Info>Disponível em: {product.markets[0]?.name}</Info>}
        <Button onClick={onAddProduct}>Adicionar a Lista de Compras</Button>
      </InfoContainer>
    </Container>
  );
};

export default ProductCard;
