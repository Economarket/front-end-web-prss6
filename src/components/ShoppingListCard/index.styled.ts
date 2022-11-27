import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin: 2rem 0;
    padding: 2rem 2.5rem;
    background-color: ${theme.colors.blue300}0C;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #0004;
`;

export const Header = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const InfoContainer = styled(Header)`
    align-items: flex-end;
    margin: 0;
    margin-top: 2rem;
`;

export const Body = styled.div<{ show: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: ${({ show }) => show ? '80vh' : '0'};
    overflow-y: scroll;
    transition: max-height 0.5s ease-out;
    padding-right: 1rem;

    &::-webkit-scrollbar {
        background: transparent;
        width: 1rem;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 8px;
        width: 0.25rem;
    }
`

export const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: center;
    color: ${theme.colors.blue200};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.large};
    margin: 0 1rem;
`;

export const ActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
`;

export const AddButton = styled.a`
    display: flex;
    align-items: center;
    padding: 0.5rem 1.75rem;
    text-decoration: none;
    text-align: center;
    font-family: 'Lato';
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${theme.colors.blue300};
    border: none;
    border-radius: 5px;
    color: ${theme.colors.whiteFull};

    &:hover {
        background-color: ${theme.colors.blue200};
        cursor: pointer;
    }
`;