import styled, { css } from "styled-components";
import { mediaQuerySm } from "../../mixins/media-queries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQuerySm(css``)}
`;

export const WrapperHeader = styled.div`
  display: flex;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 8rem;
  width: 100%;
  padding: 2rem 4rem;
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  min-height: 20vh;

  ${mediaQuerySm(css``)};
`;

export const WrapperUser = styled.div`
  display: flex;
  gap: 2rem;
`;
export const WrapperData = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const WrapperIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Logo = styled.div`
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-color: #d9d9d9;
  display: flex;
  justify-content: center;
  padding: 2rem;
  min-height: 20vh;
  min-width: 40vh;
`;

export const WrapperText = styled.div`
  flex-direction: column;
  align-items: center;
  margin-left: 20rem;
`;
export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.large};
    margin: 0.5rem;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.gray900};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const WrapperMiddle = styled.div`
  display: flex;
  overflow-x: hidden;
`;

export const WrapperMenu = styled.div`
  border-right: 2px solid;
  border-color: #d9d9d9;
  padding: 1rem;
  min-width: 40vh;
`;

export const WrapperContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WrapperContent = styled.div`
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  height: 100%;
  width: 100%;
`;

export const WrapperFoot = styled.div`
  width: 79%;
  padding: 2rem;
  min-height: 20vh;
`;
