import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
    transform: translateY(0);
    position: fixed;
    overflow-y: hidden;
    overflow-x: hidden;
    top: 2rem;
    left: 2rem;
    right: 2rem;
    bottom: 2rem;
    margin: auto;

    padding: 2rem;
    background-color: ${theme.colors.whiteFull};
    border-radius: ${theme.border.radius.xxlarge};
    border: 2px solid ${theme.colors.blue300};
    z-index: 50;
    float: left;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Button = styled.button`
    padding: 2rem 0;
    font-size: 4rem;
    font-family: Lato;
    font-weight: 600;
    border: none;
    border-radius: ${theme.border.radius.large};
    color: ${theme.colors.whiteFull};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    & > svg {
        fill: ${theme.colors.whiteFull};
        height: 5rem;
        width: 5rem;
    }
`;

export const DownloadButton = styled(Button)`
    background-color: ${theme.colors.blue300};
    &:hover {
        background-color: ${theme.colors.blue200};
    }
`;

export const ContinueButton = styled(Button)`
    background-color: ${theme.colors.gray500};
    &:hover {
        background-color: ${theme.colors.gray900};
    }
`;