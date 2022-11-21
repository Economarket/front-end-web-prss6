import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    justify-content: right;
    margin-bottom: 3.2rem;
  `}
`;

export const ButtonWrapper = styled.div`
  align-items: center;
`;

export const PageSize = styled.p`
  align-items: center;
  padding: 0 6rem 0 0;
`;
