import { useCallback, useEffect, useState } from "react";
import IconClose from "../../../../assets/icons/close";
import IconPlusCicle from "../../../../assets/icons/plusCicle";
import ModalContainer from "../../../../components/ModalContainer";
import Select from "../../../../components/Select";
import ToastHelper from "../../../../components/Toast/toast";
import { useSession } from "../../../../contexts/session";
import { Product, ProductList, ShoppingList, User } from "../../../../services/models";
import { addProductToShoppingList, getShoppingList } from "../../../../services/shopping";
import * as I from "../index.styled";

interface AddShoppingListModalProps {
    product?: Product;
    toggle: () => void;
}
const AddShoppingListModal: React.FC<AddShoppingListModalProps> = ({ product, toggle }) => {
    const { user } = useSession();
    const [selectedList, setSelectedList] = useState<ShoppingList>();
    const [lists, setLists] = useState<ShoppingList[]>([]);
    const [qtd, setQtd] = useState<number>(1);

    const updateShoppingLists = useCallback(async (u: User) => {
        setLists(await getShoppingList(u.id));
    }, []);

    const handleSaveProduct = useCallback(async () => {
        if(user && selectedList && product){
            const productList: ProductList = {
                product: product,
                quantity: qtd
            }
            await addProductToShoppingList(selectedList, productList, user.id).then(() => {
                ToastHelper("Produto adicionado à lista com sucesso!", "success");
            }).catch(() => {
                ToastHelper("Erro ao adicionar produto à lista!", "error");
            }).finally(() => toggle());
        }
    }, [user, selectedList, product, qtd, toggle]);

    useEffect(() => {
        if(user){
            updateShoppingLists(user);
        }
    }, [updateShoppingLists, user])

    return (
        <ModalContainer isShown={!!product} toggle={toggle} width={"350px"}>
            <I.Container>
                <I.Header>
                    <span style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                        <IconPlusCicle className="icon-plus"/><I.Title>Adicionar produto à lista</I.Title>
                    </span>
                    <I.CloseButton  onClick={toggle}>
                        <IconClose />
                    </I.CloseButton>
                </I.Header>
                <I.Body>
                    <I.Description>Selecione a lista e a quantidade a ser adicionada</I.Description>
                    <I.InputsContainer>
                        <Select
                            className="lists"
                            isAutocomplete
                            options={lists.map(l => ({label: l.name, value: l.id ?? 0}))}
                            placeholder="Selecione a lista"
                            onChange={(option) => (
                                setSelectedList(lists.find(l => (l.id === option.value)))
                            )}
                            value={selectedList 
                                ? {label: selectedList.name, value: selectedList.id ?? 0} 
                                : undefined
                            }
                        />
                        <I.InputQtd 
                            type="number"
                            min={1}
                            value={qtd}
                            onChange={(event) => {
                                setQtd(parseInt(event.target.value));
                            }}
                        />
                    </I.InputsContainer>
                    <I.SaveButton 
                        onClick={handleSaveProduct}
                        disabled={!selectedList}
                    >
                        Salvar produto na lista {selectedList?.name}
                    </I.SaveButton>
                </I.Body>
            </I.Container>
        </ModalContainer>
    );
};

export default AddShoppingListModal; 