import styled, { css } from "styled-components";
import theme from "../../styles/theme";

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
    `}

`
