import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: grid;
  gap: 2rem;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.offdark};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
  padding-top: 1rem;
`;

export const Link = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundBlue};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const TextPassword = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
