import { useCallback, useMemo, useState } from "react";
import IconChevronDown from "../../assets/icons/chevronDown";
import IconChevronUp from "../../assets/icons/chevronUp";
import IconListCheck from "../../assets/icons/listCheck";
import IconPlusCicle from "../../assets/icons/plusCicle";
import IconTrash from "../../assets/icons/trash";
import { useSession } from "../../contexts/session";
import { ProductList, ShoppingList } from "../../services/models";
import { deleteProductToShoppingList } from "../../services/shopping";
import ShoppingListItem from "../ShoppingListItem";
import ToastHelper from "../Toast/toast";
import {
  ActionButton, AddButton, Body, Container, Header,
  HeaderContainer, InfoContainer, Title
} from "./index.styled";

interface ShoppingListCardProps {
  shoppingList: ShoppingList;
  onDeleteList: () => void;
  updateShoppingList: () => void;
}
const ShoppingListCard: React.FC<ShoppingListCardProps> = ({
  shoppingList,
  onDeleteList,
  updateShoppingList,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [size, total] = useMemo(() => [shoppingList.productList?.length, shoppingList.totalPrice], [shoppingList]);
  const { user } = useSession();

  const handleDeleteProduct = useCallback(async (productList: ProductList) => {
    if (user) {
        await deleteProductToShoppingList(shoppingList, productList, user.id).then(() => {
          updateShoppingList();
          ToastHelper("Produto removido da lista com sucesso!", "success");
        }).catch(() => {
          ToastHelper("Erro ao remover produto da lista.", "error");
        });
    }
  }, [shoppingList, updateShoppingList, user]);

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <IconListCheck />
          <Title>{shoppingList.name}</Title>
        </HeaderContainer>
        <HeaderContainer>
          <ActionButton onClick={onDeleteList}>
            <IconTrash />
          </ActionButton>
          {!!size && (
            <ActionButton onClick={() => setOpen((o) => !o)}>
              {open ? <IconChevronUp /> : <IconChevronDown />}
            </ActionButton>
          )}
        </HeaderContainer>
      </Header>
      {!!shoppingList.productList && (
        <Body show={open}>
          {shoppingList.productList.map((p, index) => (
            <ShoppingListItem
              key={index}
              sl={shoppingList}
              update={updateShoppingList}
              productList={p}
              onDelete={() => handleDeleteProduct(p)}
            />
          ))}
        </Body>
      )}
      <InfoContainer>
        <Title style={{ fontSize: "1.75rem" }}>
          {size
            ? `Possui ${size} produtos - Total: R$ ${(total ?? 0).toFixed(2)}`
            : "Você ainda não adicionou produtos a esta lista"}
        </Title>
        {open && (
          <ActionButton
            onClick={() => setOpen((o) => !o)}
            style={{ alignSelf: "center" }}
          >
            <IconChevronUp />
          </ActionButton>
        )}
        <AddButton href="/produtos">
          <span style={{ marginRight: "1rem", marginTop: ".5rem" }}>
            <IconPlusCicle />
          </span>
          Adicionar produtos
        </AddButton>
      </InfoContainer>
    </Container>
  );
};

export default ShoppingListCard;
