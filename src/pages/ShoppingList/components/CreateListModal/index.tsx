import { useState } from "react";
import IconClose from "../../../../assets/icons/close";
import IconHeart from "../../../../assets/icons/heart";
import ModalContainer from "../../../../components/ModalContainer";
import { Body, CloseButton, Container, CreateButton, Description, Header, NameInput, Title } from "../index.styled";

interface CreateListModalProps {
    isShown: boolean;
    toggle: () => void;
    createList: (name: string) => void;
}
const CreateListModal: React.FC<CreateListModalProps> = ({ isShown, toggle, createList }) => {
    const [name, setName] = useState<string>();
    return (
    <ModalContainer isShown={isShown} toggle={toggle} width={"30rem"}>
        <Container>
            <Header>
                <span style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <IconHeart style={{filter: 'invert(100%)'}}/>
                    <Title>Criar sua lista</Title>
                </span>
                <CloseButton  onClick={toggle}>
                    <IconClose />
                </CloseButton>
            </Header>
            <Body>
                <Description>Qual o nome da sua lista?</Description>
                <NameInput onChange={(e) => setName(e.target.value)} placeholder="ex: Churrasco, Despesa"/>
                <CreateButton onClick={() => createList(name || "")}>Criar nova lista</CreateButton>
            </Body>
        </Container>
    </ModalContainer>
    )
};

export default CreateListModal;