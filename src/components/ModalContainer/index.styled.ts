import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: d9d9d9cc;
    z-index: 100;
`;

interface ContainerProps {
    max_width: string;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    position: fixed;
    margin: auto;
    left: 1rem;
    right: 1rem;
    max-width: ${({ max_width }) => max_width};
    zindex: 110;
`;