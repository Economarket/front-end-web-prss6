import styled from "styled-components";
import theme from "../../styles/theme";

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 1rem 0;

    & .c-1, .c-2 {
        display: flex;
        gap: 1rem;
    }

    & .c-1 {
        width: fit-content;
    }

    & .distanceLabel, .marketLabel {
        font-family: Lato;
        font-size: 2rem;
        color: ${theme.colors.blue300};
    }

    & .range {
        width: 40rem;
        display: flex;
        align-items: center;
    }
`; 