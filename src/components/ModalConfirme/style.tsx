import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30rem;
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: ${theme.colors.blue300};
    border-radius: 5px 5px 0 0;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: ${theme.colors.whiteFull};
    gap: 1.5rem;
    border-radius: 0 0 5px 5px;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: Lato;
    color: ${theme.colors.whiteFull};
  `}
`;

export const Description = styled.p`
  font-family: Lato;
  color: #727978;
  font-size: 1.5rem;
  text-align: center;
`;

export const NameInput = styled.input`
  ${({ theme }) => css`
    font-size: 1.5rem;
    text-align: left;
    width: 100%;
    padding: 1rem;
    border: 1px solid ${theme.colors.blue300};
    border-radius: ${theme.border.radius.large};
  `}
`;

export const CreateButton = styled.button`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 600;
    width: 100%;
    padding: 0.75rem 0;
    color: ${theme.colors.backgroundWhite};
    border: none;
    background-color: ${theme.colors.blue300};
    border-radius: ${theme.border.radius.large};

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.blue200};
    }
  `}
`;

export const NoButton = styled(CreateButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray500};
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.gray300};
    }
  `}
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
