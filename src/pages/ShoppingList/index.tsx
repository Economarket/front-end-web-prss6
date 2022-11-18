import { Title } from '../../templates/InternalLayout/styles';
import { NewListContainer, NewListButton, MainContainer } from './index.styled';

const ShoppingList: React.FC = () => {
  return (
  <MainContainer>
    <Title> Lista de Compras</Title>
    <NewListContainer>
      <Title>Minhas Listas</Title>
      <NewListButton>Criar nova lista</NewListButton>
    </NewListContainer>
  </MainContainer>
  );
};

export default ShoppingList;