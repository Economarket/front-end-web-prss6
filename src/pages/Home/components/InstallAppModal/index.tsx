import ModalContainer from "../../../../components/ModalContainer";
import Android from "../../../../assets/android.png";
import * as I from "./index.styled";
import IconDownload from "../../../../assets/icons/download";
import IconChevronRigth from "../../../../assets/icons/chevronRight";

interface InstallAppModalProps {
    isShown: boolean;
    close: () => void;
}
const InstallAppModal: React.FC<InstallAppModalProps> = ({ isShown, close}) => {
    return (
        <ModalContainer isShown={isShown}>
            <I.Container>
                <I.Message>Olá, você sabia que o Econo market também possui um aplicativo Android?</I.Message>
                <I.Image src={Android}/>
                <I.Message>Com o app, a sua experiência com nossa plataforma será muito melhor já que ele foi feito pensando em você!</I.Message>
                <I.Download>Deseja instalar o aplicativo?</I.Download>
                <I.ButtonContainer>
                    <I.DownloadButton onClick={() =>
                        window.location.replace(
                            'https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40bergue/econo-market-dd237a39271945b3939a4d2e1504cd01-signed.apk',
                        )}
                    >
                        Baixar o app <IconDownload />
                    </I.DownloadButton>
                    <I.ContinueButton onClick={close}>Continuar na aplicação <IconChevronRigth /></I.ContinueButton>
                </I.ButtonContainer>
            </I.Container>
        </ModalContainer>
    )
};

export default InstallAppModal;