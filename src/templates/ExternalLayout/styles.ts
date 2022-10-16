import styled, { css } from "styled-components";
import {
  mediaQueryLg,
  mediaQuerySm,
  mediaQueryXl,
} from "../../mixins/media-queries";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.backgroundBlue};
  `}

  display: grid;
  grid-template-rows: 15% 1fr;
  justify-items: center;
  min-height: 100vh;
  width: 100%;

  ${mediaQuerySm(css`
    display: grid;
    grid-template-columns: 58% 1fr;
    grid-template-rows: 1fr;
  `)}
`;

export const WrapperLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ${mediaQuerySm(css`
    padding-top: 6rem;
  `)};
`;

export const Content = styled.div`
  justify-content: center;
  width: 70%;
`;

export const Logo = styled.div`
  margin: 1rem 0;
  position: absolute;
  top: 0;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.large};
    padding-bottom: 0.6rem;
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray900};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xsmall};
    padding-bottom: 1.2rem;
  `}
`;

export const WrapperRight = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.whiteFull};
    border-radius: 10px;
    display: flex;
    height: 94%;
    justify-content: center;
    margin: auto;
    width: 92%;
  `}
`;

export const Image = styled.img`
  width: 0;

  ${mediaQuerySm(css`
    width: 80%;
  `)};

  ${mediaQueryLg(css`
    width: 70%;
  `)};

  ${mediaQueryXl(css`
    width: 60%;
  `)};
`;
