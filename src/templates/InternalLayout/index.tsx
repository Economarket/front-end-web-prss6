import AddressUser from "../../assets/icons/address";
import IconUser from "../../assets/icons/user";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../../components/Button";
import Sidebar from "../../components/SideBar/sidebar";
import * as S from "./styles";

export interface InternalTemplate {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
  user?: string;
  address?: string;
}

const InternalAccessContainer = ({
  title = "Economize nas suas compras de mercado: Pesquise!",
  subtitle = "O que você precisa para economizar está aqui. Faça buscas e encontre o melhor preço.",
  children,
  user,
  address,
}: InternalTemplate) => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Logo fill="#197AA6" />
      </S.Logo>

      <S.WrapperHeader>
        <S.WrapperText>
          <S.Title>{title}</S.Title>

          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.WrapperText>

        <S.WrapperUser>
          <S.WrapperData>
            <S.Subtitle>Olá, fulano{user}</S.Subtitle>
            <S.Subtitle>Endereco{address}</S.Subtitle>
          </S.WrapperData>

          <S.WrapperIcons>
            <Button
              appearance="ghost"
              sizes="small"
              text="Alterar Senha"
              icon={IconUser}
            />
            <Button
              appearance="ghost"
              sizes="small"
              text="Sair | Desconectar"
              icon={AddressUser}
            />
          </S.WrapperIcons>
        </S.WrapperUser>
      </S.WrapperHeader>

      <S.WrapperMenu>
        <Sidebar />
      </S.WrapperMenu>

      <S.WrapperContent>{children}</S.WrapperContent>

      <S.WrapperFoot>
        <S.Subtitle>
          © Copyright 2022 - EconoMarket - Todos os direitos reservados
          EconoMarket
        </S.Subtitle>
        <S.Subtitle>
          CNPJ 12.345.678/9123-45 / Enderço, nº 123, Bairro, Araraquara/SP - CEP
          12.345-678
        </S.Subtitle>
      </S.WrapperFoot>
    </S.Wrapper>
  );
};

export default InternalAccessContainer;
