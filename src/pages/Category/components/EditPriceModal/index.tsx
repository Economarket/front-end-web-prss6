import { useCallback, useState } from "react";
import IconChevronRigth from "../../../../assets/icons/chevronRight";
import IconClose from "../../../../assets/icons/close";
import EditPrice from "../../../../assets/icons/editPrice";
import ModalContainer from "../../../../components/ModalContainer";
import { currencyMask, removeCurrencyMask } from "../../../../fomatters/currencyMask";
import { Product } from "../../../../services/models";
import { updateProduct } from "../../../../services/product";
import { Body, CloseButton, Container, Header, InputPrice, InputsContainer, SaveButton, Title } from "./index.styled";

interface EditPriceModalProps {
    product?: Product;
    toggle: () => void; 
}
const EditPriceModal: React.FC<EditPriceModalProps> = ({ product, toggle }) => {

    const [price, setPrice] = useState<string>();

    const handleEditPrice = useCallback(() => {
        if(price && product 
            && product.id 
            && product.brand.id
            && product.markets
            && product.markets[0].id
        ){
            updateProduct({
                id: product.id,
                name: product.name,
                price: parseFloat(removeCurrencyMask(price)),
                unity: product.unity,
                brand: { id: product.brand.id },
                category: { id: product.category.id},
                markets: [{ id: product.markets[0].id }],
            });
        }
        toggle();
    }, [toggle, product, price]);

    return (
        <ModalContainer isShown={!!product} toggle={toggle}>
            <Container>
                <Header>
                    <span style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                        <EditPrice className='icon'/>
                        <Title>Edição de preço</Title>
                    </span>
                    <CloseButton  onClick={toggle}>
                        <IconClose />
                    </CloseButton>
                </Header>
                <Body>
                    <InputsContainer>
                        <InputPrice 
                            value={currencyMask(product ? product.price.toString() : "")}
                            disabled={true}
                        />
                        <IconChevronRigth />
                        <InputPrice 
                            placeholder="Digite o preço atual"
                            value={price}
                            onChange={(event) => {
                                setPrice(currencyMask(event.target.value));
                            }}
                        />
                    </InputsContainer>
                    <SaveButton onClick={handleEditPrice}>Salvar novo preço $</SaveButton>
                </Body>
            </Container>
        </ModalContainer>
    )
};

export default EditPriceModal;