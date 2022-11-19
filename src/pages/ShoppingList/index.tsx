import { useCallback, useEffect, useState } from 'react';
import ShoppingListCard from '../../components/ShoppingListCard';
import { ShoppingList as ShoppingModel } from '../../services/models';
import { getShoppingList } from '../../services/shopping';
import { Title } from '../../templates/InternalLayout/styles';
import { NewListContainer, NewListButton, MainContainer } from './index.styled';
import { useSession } from "../../contexts/session";

const ShoppingList: React.FC = () => {
  const { user } = useSession();
  const [shoppingList, setShoppingList] = useState<ShoppingModel[]>();

  const updateShoppingList = useCallback(async () => {
    if(user)
      setShoppingList(await getShoppingList(user.id));
  }, [user]);

  useEffect(() => {
    updateShoppingList();
  }, [updateShoppingList]);

  const handleDeleteList = () => {
    
  };

  const handleDeleteProduct = () => {
    
  };

  return (
  <MainContainer>
    <Title> Lista de Compras</Title>
    <NewListContainer>
      <Title>Minhas Listas</Title>
      <NewListButton>Criar nova lista</NewListButton>
    </NewListContainer>
    {shoppingList && shoppingList.map((s) => (
      <ShoppingListCard 
        key={s.id} 
        shoppingList={s}
        onDeleteList={() => handleDeleteList()}
        onDeleteProduct={() => handleDeleteProduct()}
      />
    ))}
  </MainContainer>
  );
};

export default ShoppingList;