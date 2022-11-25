import { useMemo, useState } from "react";
import IconChevronDown from "../../assets/icons/chevronDown";
import IconChevronUp from "../../assets/icons/chevronUp";
import IconListCheck from "../../assets/icons/listCheck";
import IconPlusCicle from "../../assets/icons/plusCicle";
import IconTrash from "../../assets/icons/trash";
import { ProductList, ShoppingList } from "../../services/models";
import ShoppingListItem from "../ShoppingListItem";
import { useSession } from "../../contexts/session";
import {
  ActionButton,
  Body,
  Header,
  HeaderContainer,
  Container,
  Title,
  InfoContainer,
  AddButton,
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
  const [toDeleteProduct, setToDeleteProduct] = useState<ProductList>();
  const size = useMemo(() => shoppingList.productList?.length, [shoppingList]);
  const { user } = useSession();



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
              productList={p}
              shoppingList={shoppingList}
              onDelete={() => setToDeleteProduct(p)}
              updateShoppingList={updateShoppingList}
            />
          ))}
        </Body>
      )}
      <InfoContainer>
        <Title style={{ fontSize: "1.75rem" }}>
          {size
            ? `Possui ${size} produtos`
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
