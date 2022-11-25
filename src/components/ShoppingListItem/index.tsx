import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { categories_round_assets } from "../../assets/categories-round/categories-round";
import IconSheet from "../../assets/icons/sheet";
import TrashIcon from "../../assets/icons/trash";
import { useSession } from "../../contexts/session";
import { ProductList, ShoppingList } from "../../services/models";
import { editPriceToShoppingList } from "../../services/shopping";
import { CategoryImage, Container, InfoContainer, Name, Price, QtdContainer, QtdInput, TrashContainer, TrashIconContainer } from "./index.styled";


interface ShoppingListItemProps {
  productList: ProductList;
  sl?: ShoppingList;
  update?: () => void;
  onDelete?: () => void;
}
const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  productList,
  sl,
  update,
  onDelete,
}) => {
  const [qtd, setQtd] = useState<number>(productList.quantity);
  const qtdDebounce = useDebounce(qtd, 1000);
  const { user } = useSession();

  const editPrice = useCallback(async (quantity: number) => {
    if(user && sl && productList.id){
      if(await editPriceToShoppingList(sl, productList, user.id, quantity) && update){
        update();
      }
    }
  }, [productList, sl, update, user]);

  useEffect(() => {
    editPrice(qtdDebounce);
  }, [editPrice, qtdDebounce]);
  
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
        <QtdInput 
          type="number" 
          min={0}
          maxLength={3} 
          value={qtd} 
          onChange={(e) => setQtd(parseInt(e.target.value))}
        />
        <TrashIconContainer onClick={onDelete}>
          <TrashIcon  />
        </TrashIconContainer>
      </TrashContainer>  
        
    </Container>
  );
};

export default ShoppingListItem;