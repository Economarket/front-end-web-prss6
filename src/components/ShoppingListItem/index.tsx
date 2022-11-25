import { categories_round_assets } from "../../assets/categories-round/categories-round";
import IconSheet from "../../assets/icons/sheet";
import TrashIcon from "../../assets/icons/trash";
import { ProductList, ShoppingList } from "../../services/models";
import { CategoryImage, Container, InfoContainer, Name, Price, QtdContainer, QtdInput, TrashContainer } from "./index.styled";
import { useSession } from "../../contexts/session";
import { useState } from "react";
import { deleteProductToShoppingList, editProductToShoppingList } from "../../services/shopping";
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
  const [edit, setEdit] = useState({ type: "number" })
  
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

  const handleEditProduct = async (e: any) => {
    if(user){
      try{
        setEdit(e.target.value)
        const quantity = e.target.value
        await editProductToShoppingList(shoppingList, productList, quantity, user.id);
        ToastHelper("Produto editado com sucesso", "success")
        updateShoppingList()
      }catch{
        ToastHelper("Erro ao editar", "error")
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
      <TrashContainer >
        <QtdInput type="number" maxLength={3} placeholder={"0"} defaultValue={productList.quantity} onChange={handleEditProduct}/>
        <TrashIcon onClick={handleDeleteProduct}/>
      </TrashContainer>
    </Container>
  );
};

export default ShoppingListItem;