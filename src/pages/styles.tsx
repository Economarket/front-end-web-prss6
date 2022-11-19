import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
`;

export const HomeContainer = styled(Wrapper)`
  padding: 3rem;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.offdark};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
  padding-top: 1rem;
  text-align: center;
`;

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundBlue};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
  padding-left: 0.5rem;
  cursor: pointer;
`;

export const TextPassword = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const CardsMarketContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const CaroselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CardCategoryContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.whiteFull};
    border-radius: 10px;
    display: grid;
    height: 90%;
    justify-content: center;
    margin: auto;
    padding: 2%;
    width: 60%;
  `};
`;
