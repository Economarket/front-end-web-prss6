import { useCallback, useState } from "react";
import IconChevronRigth from "../../../../assets/icons/chevronRight";
import IconClose from "../../../../assets/icons/close";
import EditPrice from "../../../../assets/icons/editPrice";
import ModalContainer from "../../../../components/ModalContainer";
import { currencyMask, removeCurrencyMask } from "../../../../fomatters/currencyMask";
import { Product } from "../../../../services/models";
import { updateProduct } from "../../../../services/product";
import * as I from "../index.styled";

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
            <I.Container>
                <I.Header>
                    <span style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                        <EditPrice className='icon'/>
                        <I.Title>Edição de preço</I.Title>
                    </span>
                    <I.CloseButton  onClick={toggle}>
                        <IconClose />
                    </I.CloseButton>
                </I.Header>
                <I.Body>
                    <I.Description>Digite o novo preço do produto</I.Description>
                    <I.InputsContainer>
                        <I.InputPrice 
                            value={currencyMask(product ? product.price.toString() : "")}
                            disabled={true}
                        />
                        <IconChevronRigth />
                        <I.InputPrice 
                            placeholder="Digite o preço atual"
                            value={price}
                            onChange={(event) => {
                                setPrice(currencyMask(event.target.value));
                            }}
                        />
                    </I.InputsContainer>
                    <I.SaveButton onClick={handleEditPrice}>Salvar novo preço $</I.SaveButton>
                </I.Body>
            </I.Container>
        </ModalContainer>
    )
};

export default EditPriceModal;