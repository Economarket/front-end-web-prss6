import { Backdrop, Container } from "./index.styled";

interface ModalContainerProps {
    width?: string;
    isShown: boolean;
    toggle: () => void;
    children: React.ReactNode;
}
const ModalContainer: React.FC<ModalContainerProps> = ({ width, isShown, toggle, children}) => {
    return (<>
        { isShown && <>
            <Backdrop onClick={toggle}/>
            <Container max_width={width || '500px'}>
                {children}
            </Container>
        </>}
    </>);
};

export default ModalContainer;