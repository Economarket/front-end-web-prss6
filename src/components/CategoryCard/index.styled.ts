import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25rem;
    height: 11rem;
    padding: 1rem 2rem;
    background-color: ${theme.colors.blue300}0D;
    border-radius: 3rem;
    margin: 1rem;

    &:hover {
        box-shadow: 0px 4px 4px #0005;
        cursor: pointer;
    }
`;

export const CategoryImage = styled.img`
    width: 50%;
`;

export const CategoryName = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    text-align: right;
`;