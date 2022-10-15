import { ReactComponent as Logo } from "../../assets/Logo.svg";
import * as S from "./styles";

export interface ExternalTemplate {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
}

const ExternalAccessContainer = ({ title, subtitle, children, image }: ExternalTemplate) => {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.Content>
          <S.Logo>
            <Logo />
          </S.Logo>

          <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>

          {children}
        </S.Content>
      </S.WrapperLeft>

      <S.WrapperRight>
        <S.Image src={image} />
      </S.WrapperRight>
    </S.Wrapper>
  );
};

export default ExternalAccessContainer;
