import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  & .c-1,
  .c-2 {
    display: flex;
    gap: 1rem;
  }

  & .c-1 {
    width: fit-content;
  }

  & .distanceLabel,
  .marketLabel {
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.blue300};
  }

  & .range {
    width: 40rem;
    display: flex;
    align-items: center;
  }
`;
