import { categories_round_assets } from "../../assets/categories-round/categories-round";
import IconSheet from "../../assets/icons/sheet";
import TrashIcon from "../../assets/icons/trash";
import { ProductList } from "../../services/models";
import { CategoryImage, Container, InfoContainer, Name, Price, QtdContainer, QtdInput, TrashContainer } from "./index.styled";

interface ShoppingListItemProps {
    productList: ProductList;
    onDelete?: () => void;
}
const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ productList, onDelete }) => {
    return (
        <Container>
            <QtdContainer>
                <IconSheet />
                <CategoryImage 
                    alt={productList.product.category.name} 
                    src={categories_round_assets[productList.product.category.searchName]}
                    />
                    <InfoContainer>
                        <Name>{productList.product.name}</Name>
                        <Price>{`R$ ${productList.product.price.toFixed(2)}`}<small>{`/ ${productList.product.unity} ${productList.product.market?.name || ''}`}</small></Price>
                    </InfoContainer>
            </QtdContainer>
            <TrashContainer onClick={onDelete}>
                <QtdInput type="number" maxLength={3} placeholder={"0"} value={productList.quantity}/>
                <TrashIcon />
            </TrashContainer>
        </Container>
    );
};

export default ShoppingListItem;