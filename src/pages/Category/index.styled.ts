import styled from "styled-components";
import theme from "../../styles/theme";


export const Header = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Back = styled.h2`
    display: flex;
    align-items: center;
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.medium};
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const Search = styled.button`
    padding: 1rem 3rem;
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