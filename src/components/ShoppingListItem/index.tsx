import { categories_round_assets } from "../../assets/categories-round/categories-round";
import IconSheet from "../../assets/icons/sheet";
import TrashIcon from "../../assets/icons/trash";
import { ProductList, ShoppingList } from "../../services/models";
import { CategoryImage, Container, InfoContainer, Name, Price, QtdContainer, QtdInput, TrashContainer } from "./index.styled";
import { useSession } from "../../contexts/session";
import { deleteProductToShoppingList } from "../../services/shopping";
import ToastHelper from "../Toast/toast";


interface ShoppingListItemProps {
  productList: ProductList;
  shoppingList: ShoppingList;
  updateShoppingList: () => void;
  onDelete?: () => void;
}
const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ 
  productList,
  shoppingList, 
  onDelete,
  updateShoppingList,
}) => {
  const { user } = useSession();
  
  const handleDeleteProduct = async () => {
    if(user){
      try{
        await deleteProductToShoppingList(shoppingList, productList, user.id);
        ToastHelper("Produto excluído com sucesso", "success")
        updateShoppingList()
      }catch{
        ToastHelper("Erro ao excluir", "error")
      }
    }
  }

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
          <Price>{`R$ ${productList.product.price.toFixed(2)}`}
            <small>
              {`/ ${productList.product.unity} ${productList.product.markets ? productList.product.markets[0]?.name : ''}`}
            </small>
          </Price>
        </InfoContainer>
      </QtdContainer>
      <TrashContainer onClick={handleDeleteProduct}>
        <QtdInput type="number" maxLength={3} placeholder={"0"} value={productList.quantity} />
        <TrashIcon />
      </TrashContainer>
    </Container>
  );
};

export default ShoppingListItem;