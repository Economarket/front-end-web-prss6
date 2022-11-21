import styled, { css, keyframes } from "styled-components";

import { SkeletonProps } from "./";

const shine = keyframes`
  to {
    background-position: right -5rem top 0;
  }
`;

const Wrapper = styled.div<SkeletonProps>`
  ${({ width, height, margin, borderRadius, minWidth, theme }) => css`
    background-color: ${theme.skeleton.bg};
    background-image: ${theme.skeleton.gradient};
    background-size: 5rem 100%;
    background-repeat: no-repeat;
    background-position: left -5rem top 0;
    animation: ${shine} 1s ease infinite;

    display: block;
    position: relative;
    width: ${width};
    height: ${height};
    margin: ${margin};
    ${!!borderRadius &&
    css`
      border-radius: ${borderRadius};
    `};
  `};
`;

export { Wrapper };
