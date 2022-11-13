import styled, { css } from "styled-components";
import {
  mediaQuerySm,
} from "../../mixins/media-queries";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 0.5fr;
  grid-template-columns: 2fr 8fr;
  justify-items: center;
  min-height: 100vh;
  width: 100%;

  ${mediaQuerySm(css``)}
`;

export const WrapperHeader = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 8rem;
  width: 100%;
  padding: 2rem 4rem;
  border-bottom: 2px solid;
  border-color: #d9d9d9;

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
  grid-column: 1/1;
  grid-row: 1/1;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-color: #d9d9d9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const WrapperText = styled.div`
  flex-direction: column;
  align-items: center;
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

export const WrapperMenu = styled.div`
  grid-column: 1/1;
  grid-row: 2/4;
  border-right: 2px solid;
  border-color: #d9d9d9;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;

export const WrapperContent = styled.div`
  grid-column: 2/2;
  grid-row: 2/2;
  border-bottom: 2px solid;
  border-color: #d9d9d9;
  height: 100%;
  width: 100%;
`;

export const WrapperFoot = styled.div`
  grid-column: 2/2;
  grid-row: 3/3;
  height: 100%;
  width: 100%;
  padding: 2rem;
`;
