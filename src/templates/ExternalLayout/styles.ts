import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 42% 1fr;
  height: 100vh;
  justify-items: center;
  width: 100%;
`;

export const WrapperLeft = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.whiteFull};
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  `}
`;

export const Content = styled.div`
  min-width: 30rem;
  width: 70%;
`;

export const Logo = styled.div`
  text-align: center;
  margin: 1rem 0;
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
    background: ${theme.colors.backgroundBlue};
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  `}
`;

export const Image = styled.img`
  width: 80%;
`;
