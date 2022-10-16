import styled, { css, DefaultTheme } from "styled-components";

export type AppearancePasswordRulesProps = {
  appearance?: "error" | "correct" | "default";
};

const modifiers = {
  correct: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};

    ${Icon} {
      color: ${theme.colors.success};
    }
  `,

  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.error500};

    ${Icon} {
      color: ${theme.colors.error500};
    }
  `,

  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.blue200};

    ${Icon} {
      color: ${theme.colors.blue200};
    }
  `,
};

export const Rule = styled.div<AppearancePasswordRulesProps>`
  ${({ theme, appearance }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.bold};
    margin: 2rem 0;

    ${appearance === "default" && modifiers.default(theme)}
    ${appearance === "correct" && modifiers.correct(theme)}
    ${appearance === "error" && modifiers.error(theme)}
  `}
`;

export const Icon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;
