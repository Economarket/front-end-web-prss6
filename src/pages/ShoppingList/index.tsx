import { Fragment, useCallback, useEffect, useState } from "react";
import ShoppingListCard from "../../components/ShoppingListCard";
import { useSession } from "../../contexts/session";
import { ShoppingList as ShoppingModel } from "../../services/models";
import {
  createShoppingList,
  deleteShoppingList,
  getShoppingList,
} from "../../services/shopping";
import { Title } from "../../templates/InternalLayout/styles";
import CreateListModal from "./components/CreateListModal";
import {
  MainContainer,
  NewListButton,
  NewListContainer,
  NoListButton,
  NoListContainer,
} from "./index.styled";
import NoList from "../../assets/listaDeComprasVazia.png";
import DeleteListModal from "./components/DeleteListModal";
import Loading, { LoadingType } from "../../components/Loading";
import ToastHelper from "../../components/Toast/toast";
import * as S from "../styles";

const ShoppingList: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [toDeleteList, setToDeleteList] = useState<ShoppingModel>();
  const { user } = useSession();
  const [shoppingList, setShoppingList] = useState<ShoppingModel[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const updateShoppingList = useCallback(async () => {
    if (user) {
      setLoading(true);
      const data = await getShoppingList(user.id);
      setShoppingList(data);
      setLoading(false);
    }
  }, [user]);

  const handleCreateList = useCallback(
    async (name: string) => {
      setShowCreateModal(false);
      if (user && name) {
        const shopping_list: ShoppingModel = {
          name: name,
          user: {
            id: user.id,
          },
          productList: [],
        };
        await createShoppingList(shopping_list)
          .then(() => {
            updateShoppingList();
            ToastHelper("Lista criada com sucesso!", "success");
          })
          .catch(() => {
            ToastHelper("Erro ao criar a Lista", "error");
          });
      }
    },
    [user, updateShoppingList]
  );

  const handleDeleteList = useCallback(async () => {
    if (!!toDeleteList && toDeleteList.id) {
      await deleteShoppingList(toDeleteList.id)
        .then(() => {
          setToDeleteList(undefined);
          updateShoppingList();
          ToastHelper("Lista deletada com sucesso!", "success");
        })
        .catch(() => {
          ToastHelper("Erro ao deletar a Lista", "error");
        });
    }
  }, [toDeleteList, updateShoppingList]);

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
      {!loading &&
        (shoppingList && shoppingList.length > 0 ? (
          <Fragment>
            <NewListContainer>
              <S.Title>Minhas Listas</S.Title>
              <NewListButton onClick={() => setShowCreateModal(true)}>
                Criar nova lista
              </NewListButton>
            </NewListContainer>
            {shoppingList.map((s) => (
              <ShoppingListCard
                key={s.id}
                shoppingList={s}
                onDeleteList={() => setToDeleteList(s)}
                updateShoppingList={updateShoppingList}
              />
            ))}
          </Fragment>
        ) : (
          <NoListContainer>
            <img alt="Sem lista" src={NoList} />
            <Title>Você ainda não possui listas de compra</Title>
            <NoListButton onClick={() => setShowCreateModal(true)}>
              Criar nova lista
            </NoListButton>
          </NoListContainer>
        ))}
      <Loading loading={loading} type={LoadingType.spinningBubbles} />
    </MainContainer>
  );
};

export default ShoppingList;
