import { Fragment, useCallback, useEffect, useState } from 'react';
import ShoppingListCard from '../../components/ShoppingListCard';
import { useSession } from "../../contexts/session";
import { ShoppingList as ShoppingModel } from '../../services/models';
import { createShoppingList, deleteShoppingList, getShoppingList } from '../../services/shopping';
import { Title } from '../../templates/InternalLayout/styles';
import CreateListModal from './components/CreateListModal';
import { MainContainer, NewListButton, NewListContainer, NoListButton, NoListContainer } from './index.styled';
import NoList from "../../assets/listaDeComprasVazia.png";
import DeleteListModal from './components/DeleteListModal';

const ShoppingList: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [toDeleteList, setToDeleteList] = useState<ShoppingModel>();
  const { user } = useSession();
  const [shoppingList, setShoppingList] = useState<ShoppingModel[]>();

  const updateShoppingList = useCallback(async () => {
    if(user)
      setShoppingList(await getShoppingList(user.id));
  }, [user]);

  const handleCreateList = useCallback(async (name: string) => {
    setShowCreateModal(false);
    if(user && name){
      const shopping_list: ShoppingModel = {
        name: name,
        user: {
          id: user.id
        },
        productList: []
      };
      const { status } = await createShoppingList(shopping_list);
      if(status === 200) updateShoppingList();
    }
  }, [user, updateShoppingList]);
  
  const handleDeleteList = useCallback(async () => {
    if(!!toDeleteList && toDeleteList.id){
      const { status } = await deleteShoppingList(toDeleteList.id);
      setToDeleteList(undefined);
      if(status === 200) updateShoppingList();
    }
  }, [toDeleteList, updateShoppingList]);
  
  const handleDeleteProduct = useCallback(() => {
    
  }, []);
  
  useEffect(() => {
    updateShoppingList();
  }, [updateShoppingList]);

  return (
  <MainContainer>
    <CreateListModal 
      isShown={showCreateModal} 
      toggle={() => setShowCreateModal(false)}
      createList={handleCreateList}
    />
    <DeleteListModal
      toggle={() => setToDeleteList(undefined)}
      deleteList={handleDeleteList}
      list={toDeleteList}
    />
    <Title> Lista de Compras</Title>
    {shoppingList && shoppingList.length > 0 ? (
      <Fragment>
        <NewListContainer>
          <Title>Minhas Listas</Title>
          <NewListButton onClick={() => setShowCreateModal(true)}>Criar nova lista</NewListButton>
        </NewListContainer>
        {shoppingList.map((s) => (
          <ShoppingListCard 
            key={s.id} 
            shoppingList={s}
            onDeleteList={() => setToDeleteList(s)}
            onDeleteProduct={() => handleDeleteProduct()}
          />
        ))}
      </Fragment>
    ) : (
      <NoListContainer>
        <img alt="Sem lista" src={NoList}/>
        <Title>Você ainda não possui listas de compra</Title>
        <NoListButton onClick={() => setShowCreateModal(true)}>Criar nova lista</NoListButton>
      </NoListContainer>
    )}
  </MainContainer>
  );
};

export default ShoppingList;