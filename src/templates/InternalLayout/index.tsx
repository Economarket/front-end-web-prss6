import IconUser from "../../assets/icons/user";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/sidebar";
import * as S from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { useSession } from "../../contexts/session";
import IconLogOut from "../../assets/icons/logOut";
import { useLocalization } from "../../contexts/localization";
import ModalConfirm from "../../components/ModalConfirme";
import location from "../../assets/location.png";
import { useEffect, useState } from "react";
export interface InternalTemplate {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
}

const InternalAccessContainer = ({
  title = "Economize nas suas compras de mercado!",
  subtitle = "Pesquise e encontre o melhor para você.",
  children,
}: InternalTemplate) => {
  const { user, logout } = useSession();
  const { locateX, locateY, getPosition } = useLocalization();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleConfirme = () => {
    if (locateX && locateY) {
      setShowModal(false);
    } else {
      setTimeout(() => {
        logout();
      }, 5000);
    }
  };

  useEffect(() => {
    getPosition();
  }, [getPosition]);

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Logo>
          <Logo fill="#197AA6" />
        </S.Logo>

        <S.Header>
          <S.WrapperText>
            <S.Title>{title}</S.Title>

            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.WrapperText>

          <S.WrapperUser>
            <S.WrapperData>
              <S.Subtitle>Olá, {user?.name}</S.Subtitle>
              {/* <S.Subtitle>Endereco{address}</S.Subtitle> */}
            </S.WrapperData>

            <S.WrapperIcons>
              <Button
                appearance="ghost"
                sizes="small"
                text="Usuario"
                icon={IconUser}
                onClick={() => navigate("/perfil")}
              />

              <Button
                appearance="ghost"
                sizes="small"
                text="Sair"
                icon={IconLogOut}
                onClick={() => logout()}
              />
            </S.WrapperIcons>
          </S.WrapperUser>
        </S.Header>
      </S.WrapperHeader>

      <S.WrapperMiddle>
        <S.WrapperMenu>
          <Sidebar />
        </S.WrapperMenu>

        {!locateX && !locateY && (
          <ModalConfirm
            isShow={showModal}
            title={"Aviso"}
            children={<S.Image src={location} />}
            description={
              "Para utilizar a aplicação e obter uma melhor experiência de navegação, é necessário autorizar da localização"
            }
            confirmButtonText={"Compreendo"}
            onConfirm={handleConfirme}
          />
        )}

        <S.WrapperContentFooter>
          <S.WrapperContent>
            {children}

            <Outlet />
          </S.WrapperContent>

          <S.WrapperFoot>
            <S.Subtitle>
              © Copyright 2022 - EconoMarket - Todos os direitos reservados
              EconoMarket
            </S.Subtitle>

            <S.Subtitle>
              CNPJ 12.345.678/9123-45 / Endereço Rua Doutor Aldo Benedito
              Pierri, 250 - Jardim Paulo Freire, Araraquara - SP, 14804-296
            </S.Subtitle>
          </S.WrapperFoot>
        </S.WrapperContentFooter>
      </S.WrapperMiddle>
    </S.Wrapper>
  );
};

export default InternalAccessContainer;
