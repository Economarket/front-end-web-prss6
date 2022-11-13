import { ReactComponent as Logo } from "../../assets/Logo.svg";
import * as S from "./styles";

export interface ExternalTemplate {
  children?: React.ReactNode;
  image?: string;
  title?: string;
  subtitle?: string;
}

const ExternalAccessContainer = ({
  title,
  subtitle,
  children,
  image,
}: ExternalTemplate) => {
  return (
    <S.Wrapper>
      <S.WrapperLeft>
        <S.Logo>
          <Logo fill="#FFFFF" />
        </S.Logo>

        <S.Image src={image} />
      </S.WrapperLeft>

      <S.WrapperRight>
        <S.Content>
          <S.Title>{title}</S.Title>

          <S.Subtitle>{subtitle}</S.Subtitle>

          {children}
        </S.Content>
      </S.WrapperRight>
    </S.Wrapper>
  );
};

export default ExternalAccessContainer;
