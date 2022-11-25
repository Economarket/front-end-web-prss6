import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 30rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    background-color: ${theme.colors.blue300};
    border-radius: 5px 5px 0 0;
    height: 4rem;

    & .icon {
        fill: ${theme.colors.whiteFull};
        width: 3rem;
    }

    & .icon-plus {
        filter: invert(100%);
        width: 3rem;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem; 
    background-color: ${theme.colors.whiteFull};
    gap: 1.5rem;
    border-radius: 0 0 5px 5px;
`;

export const InputsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
`;

export const Title = styled.h2`
    font-family: Lato;
    color: ${theme.colors.whiteFull}
`;

export const Description = styled.p`
  font-family: Lato;
  color: ${theme.colors.gray900};
  font-size: 1.5rem;
  text-align: center;
  align-self: flex-start;
`;

export const CloseButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const SaveButton = styled.button`
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem 1rem;
    color: ${theme.colors.backgroundWhite};
    border: none;
    background-color: ${theme.colors.blue300};
    border-radius: ${theme.border.radius.large};

    &:hover {
        cursor: pointer;
        background-color: ${theme.colors.blue200};
    }

    &:disabled {
        background-color: ${theme.colors.gray300};
    }
`;

export const InputPrice = styled.input`
    width: 20rem;
    font-size: 2rem;
    text-align: right;
    border-radius: 5px;
    border: none;
    background: #ddd;
    padding: .5rem;
`;

export const InputQtd = styled(InputPrice)`
    width: 5rem;
`;