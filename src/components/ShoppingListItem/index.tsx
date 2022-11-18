import { categories_round_assets } from "../../assets/categories-round/categories-round";
import IconSheet from "../../assets/icons/sheet";
import TrashIcon from "../../assets/icons/trash";
import { Product } from "../../services/models";
import { CategoryImage, Container, InfoContainer, Name, Price, QtdContainer, QtdInput, TrashContainer } from "./index.styled";

interface ShoppingListItemProps {
    product: Product;
    onDelete?: () => void;
}
const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ product, onDelete }) => {
    return (
        <Container>
            <QtdContainer>
                <IconSheet />
                <CategoryImage 
                    alt={product.category.name} 
                    src={categories_round_assets[product.category.searchName]}
                    />
                    <InfoContainer>
                        <Name>{product.name}</Name>
                        <Price>{`R$ ${product.price.toFixed(2)}`}<small>{`/ ${product.unity} ${product.market?.name || ''}`}</small></Price>
                    </InfoContainer>
            </QtdContainer>
            <TrashContainer onClick={onDelete}>
                <QtdInput type="number" maxLength={3} placeholder={"0"} />
                <TrashIcon />
            </TrashContainer>
        </Container>
    );
};

export default ShoppingListItem;