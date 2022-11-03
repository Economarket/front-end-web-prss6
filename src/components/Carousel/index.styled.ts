import styled from "styled-components";
import theme from "../../styles/theme";

export const CaroselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 90%;
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CarouselList = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
`;

export const CarouselItem = styled.li`
  margin-right: 1rem;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 9rem;
    justify-content: space-between;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    color: ${theme.colors.blue200};
    font-size: 2.5rem;
    font-weight: 800;
    background-color: ${theme.colors.offwhite};
    border: 1px solid #D9D9D9;
    border-radius: ${theme.border.radius.xlarge};

    &:hover {
        cursor: pointer;
        background-color: #EEE;
    }
`;