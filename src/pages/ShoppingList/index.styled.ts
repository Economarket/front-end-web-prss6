import styled from "styled-components";
import theme from "../../styles/theme";
import { Wrapper } from "../styles";

export const MainContainer = styled(Wrapper)`
    padding: 3rem 5rem;
`;

export const NewListContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const NoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

export const NewListButton = styled.button`
    padding: 1rem 1.75rem;
    text-align: center;
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${theme.colors.blue300};
    border: none;
    border-radius: 5px;
    color: ${theme.colors.whiteFull};
    cursor: pointer;
    max-width: 20rem;
    width: 100%;

    &:hover {
        background-color: ${theme.colors.blue200}; 
    }
`;

export const NoListButton = styled(NewListButton)`
    font-size: 2rem;
    font-weight: 400;
    padding: 1rem 3rem;
`;