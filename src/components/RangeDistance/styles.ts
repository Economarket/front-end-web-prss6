import styled, { css } from "styled-components";

export const TextFilter = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.offdark};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
  padding-bottom: 1rem;
`;

export const WrapperTextFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface WrapperRangeDistanceProps {
  show: boolean;
}
export const WrapperRangeDistance = styled.div<WrapperRangeDistanceProps>`
  visibility: ${({ show }) => show ? 'visible' : 'hidden'};
  width: 100%;
  margin-bottom: 2rem;
`;
