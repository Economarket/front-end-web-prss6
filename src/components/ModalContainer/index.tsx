import { Backdrop, Container } from "./index.styled";

interface ModalContainerProps {
    width?: string;
    isShown: boolean;
    children: React.ReactNode;
}
const ModalContainer: React.FC<ModalContainerProps> = ({ width, children, isShown }) => {
    return (<>
        { isShown && <>
            <Backdrop />
            <Container max_width={width || '500px'}>
                {children}
            </Container>
        </>}
    </>);
};

export default ModalContainer;