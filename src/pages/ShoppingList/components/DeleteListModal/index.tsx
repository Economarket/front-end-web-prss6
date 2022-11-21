import IconClose from "../../../../assets/icons/close";
import IconTrash from "../../../../assets/icons/trash";
import ModalContainer from "../../../../components/ModalContainer";
import { ShoppingList } from "../../../../services/models";
import { Body, ButtonContainer, CloseButton, Container, CreateButton, Description, Header, NoButton, Title } from "../index.styled";

interface DeleteListModalProps {
    list?: ShoppingList;
    toggle: () => void;
    deleteList: () => void;
}
const DeleteListModal: React.FC<DeleteListModalProps> = ({ list, toggle, deleteList }) => {
    return (
    <ModalContainer isShown={!!list} toggle={toggle} width={"30rem"}>
        <Container>
            <Header>
                <span style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <IconTrash style={{filter: 'invert(100%)'}}/>
                    <Title>Excluir lista</Title>
                </span>
                <CloseButton  onClick={toggle}>
                    <IconClose />
                </CloseButton>
            </Header>
            <Body>
                <Description>Deseja excluir esta lista com {list?.productList?.length} itens?</Description>
                <ButtonContainer>
                    <NoButton onClick={toggle}>Voltar</NoButton>
                    <CreateButton onClick={deleteList}>Excluir</CreateButton>
                </ButtonContainer>
            </Body>
        </Container>
    </ModalContainer>
    )
};

export default DeleteListModal;