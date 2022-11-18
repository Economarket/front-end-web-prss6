import styled from "styled-components";
import theme from "../../styles/theme";
import { Wrapper } from "../styles";

export const MainContainer = styled(Wrapper)`
    padding: 2rem;
`;

export const NewListContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
`;
