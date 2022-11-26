import styled, { css } from "styled-components";
import theme from "../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  padding: 3rem;
`;

export const HomeContainer = styled(Wrapper)`
  padding: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
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
  justify-content: center;
`;

export const CaroselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CardContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

interface CardGridListProps {
  itens_row?: number;
}
export const CardGridList = styled.ul<CardGridListProps>`
  display: grid;
  flex-flow: row wrap;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(${({ itens_row }) => itens_row ?? 1}, 1fr);

  @media (min-width: 720px) {
    grid-template-columns: repeat(
      ${({ itens_row }) => (itens_row ? itens_row + 1 : 2)},
      1fr
    );
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(
      ${({ itens_row }) => (itens_row ? itens_row + 1 : 3)},
      1fr
    );
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(
      ${({ itens_row }) => (itens_row ? itens_row + 1 : 4)},
      1fr
    );
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(
      ${({ itens_row }) => (itens_row ? itens_row + 2 : 5)},
      1fr
    );
  }
`;

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.whiteFull};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding: 2rem;
    width: 60%;
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 2rem;
    width: 100%;
  `}
`;

export const WrapperRegisteProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem;
`;

export const NoProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoProductImage = styled.img`
  width: 30%;
  margin: 3rem 0;
`;

export const NoProductButton = styled.button`
  text-align: center;
  font-family: "Lato";
  background-color: ${theme.colors.blue300};
  border: none;
  border-radius: 5px;
  color: ${theme.colors.whiteFull};
  cursor: pointer;
  font-size: 2rem;
  font-weight: 400;
  padding: 1.5rem 6rem;

  &:hover {
    background-color: ${theme.colors.blue200};
  }
`;

export const WrapperHead = styled.div`
  display: flex;
`;




