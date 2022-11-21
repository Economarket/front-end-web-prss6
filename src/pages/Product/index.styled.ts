import styled from "styled-components";
import theme from "../../styles/theme";

export const Search = styled.button`
    padding: 1rem 6rem;
    text-align: center;
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${theme.colors.blue300};
    border: none;
    border-radius: 5px;
    color: ${theme.colors.whiteFull};
    cursor: pointer;

    &:hover {
        background-color: ${theme.colors.blue200}; 
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
`; 