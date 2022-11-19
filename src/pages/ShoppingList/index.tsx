import { useEffect, useState } from 'react';
import ShoppingListCard from '../../components/ShoppingListCard';
import { shopping_list_mock } from '../../mock/shopping';
import { ShoppingList as ShoppingModel } from '../../services/models';
import { Title } from '../../templates/InternalLayout/styles';
import { NewListContainer, NewListButton, MainContainer } from './index.styled';

const ShoppingList: React.FC = () => {
  
  const [shoppingList, setShoppingList] = useState<ShoppingModel[]>();

  useEffect(() => {
    setShoppingList(shopping_list_mock);
  }, []);

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