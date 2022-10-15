import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

const modifiers = {
  appearance: {
    primary: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.blue300};
      border-color: ${theme.colors.blue300};
      color: ${theme.colors.whiteFull};

      &:active {
        background-color: ${theme.colors.whiteFull};
        color: ${theme.colors.blue200};
      }
    `,

    secondary: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.secondary50};
      border-color: ${theme.colors.blue300};
      color: ${theme.colors.blue300};
    `,
  },

  sizes: {
    small: (theme: DefaultTheme) => css`
      padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
      font-size: ${theme.font.sizes.xsmall};
      border-radius: ${theme.border.radius.full};
    `,
    medium: (theme: DefaultTheme) => css`
      padding: ${theme.spacings.small} ${theme.spacings.large};
      font-size: ${theme.font.sizes.small};
      border-radius: ${theme.border.radius.large};
    `,
    large: (theme: DefaultTheme) => css`
      padding: ${theme.spacings.large} ${theme.spacings.xxxlarge};
      font-size: ${theme.font.sizes.small};
      border-radius: ${theme.border.radius.xlarge};
    `,
  },

  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray500};
    background-color: ${theme.colors.gray50};
    border-color: ${theme.colors.gray50};
    pointer-events: none;

    opacity: 0.6;
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ appearance, sizes, disabled, theme }) => css<ButtonProps>`
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-family: ${theme.font.family};
    outline: none;
    width: 100%;

    &:hover,
    &:focus {
      background-color: ${theme.colors.blue200};
      border-color: ${theme.colors.blue200};
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
        0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
      color: ${theme.colors.whiteFull};
    }

    ${disabled && modifiers.disabled(theme)};
    ${!!appearance && modifiers.appearance[appearance](theme)};
    ${!!sizes && modifiers.sizes[sizes](theme)};
  `}
`;
