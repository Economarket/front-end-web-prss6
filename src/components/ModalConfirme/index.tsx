import Button from "../Button";
import ModalContainer from "../ModalContainer";

import * as S from "./style";

interface ModalProps {
  isShow: boolean;
  iconClose?: React.ReactElement;
  closeModal?: () => void;
  title?: string;
  children?: React.ReactNode;
  description?: string;
  confirmButtonText?: string;
  onConfirm?: () => void;
}

const ModalConfirm = ({
  isShow,
  iconClose,
  closeModal,
  title,
  children,
  description,
  confirmButtonText,
  onConfirm,
  ...props
}: ModalProps) => {
  return (
    <>
      <ModalContainer isShown={isShow} toggle={closeModal} width={"30rem"}>
        <S.Container>
          <S.Header>
            <S.Title>{title}</S.Title>

            <S.CloseButton onClick={closeModal}>{iconClose}</S.CloseButton>
          </S.Header>

          <S.Body>
            {children}
            <S.Description>{description}</S.Description>

            <Button
              text={confirmButtonText}
              appearance="primary"
              onClick={onConfirm}
            />
          </S.Body>
        </S.Container>
      </ModalContainer>
    </>
  );
};

export default ModalConfirm;
