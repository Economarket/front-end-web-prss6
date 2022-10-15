import styled, { css, DefaultTheme } from "styled-components";

import { InputTextProps, IconProps } from ".";

interface ContainerProps extends Pick<InputTextProps, "disabled"> {
  error: boolean;
  hasValue: boolean;
}

const modifiers = {
  appearance: {
    primary: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.gray10};

      ${Input} {
        background-color: ${theme.colors.backgroundWhite};
      }
    `,

    secondary: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.gray300};

      ${Input} {
        background-color: ${theme.colors.whiteFull};
      }
    `,
  },

  sizes: {
    small: (theme: DefaultTheme) => css`
      height: ${theme.input.sizes.small};
    `,
    medium: (theme: DefaultTheme) => css`
      height: ${theme.input.sizes.medium};
    `,
    large: (theme: DefaultTheme) => css`
      height: ${theme.input.sizes.large};
    `,
  },

  error: (theme: DefaultTheme) => css`
    ${Label},
    ${IconWrapper},
    ${Input} {
      color: ${theme.colors.error500};
    }

    ${InputWrapper} {
      border: 0.2rem solid ${theme.colors.error300};

      &:focus,
      &:focus-within,
      &:active {
        border: 0.2rem solid ${theme.colors.error300};
      }
    }

    ${IconWrapper} {
      cursor: default;
    }
  `,

  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    opacity: 0.6;

    ${InputWrapper} {
      border-color: ${theme.colors.secondary50};
    }

    ${Input},
    ${Error} {
      color: ${theme.colors.gray50};
      cursor: inherit;
    }

    ${IconWrapper} {
      color: ${theme.colors.gray50};
      opacity: 0.6;
    }
  `,
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray6000};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled, error }) => css`
    position: relative;

    ${disabled && modifiers.disabled(theme)};
    ${error && modifiers.error(theme)};
  `}
`;

export const InputWrapper = styled.div<InputTextProps>`
  ${({ theme, sizes, appearance }) => css`
    align-items: center;
    border: 0.1rem solid ${theme.colors.backgrouGray};
    border-radius: ${theme.border.radius.large};
    display: flex;

    &:focus,
    &:focus-within,
    &:active {
      border: ${`0.1rem solid ${theme.colors.blue100}`};
      border-radius: ${theme.border.radius.large};
      box-shadow: ${"0px 0px 0px 4px rgba(99, 131, 123, 0.2)"};
    }

    ${!!appearance && modifiers.appearance[appearance](theme)};
    ${!!sizes && modifiers.sizes[sizes](theme)};
  `}
`;

export const Input = styled.input<InputTextProps>`
  ${({ theme, iconPosition, icon }) => css`
    border: 0;
    border-radius: ${theme.border.radius.large};
    color: ${theme.colors.gray6000};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.small};
    height: 100%;
    outline: none;
    padding-left: ${iconPosition === "left"
      ? theme.spacings.xxlarge
      : theme.spacings.xsmall};
    padding-right: ${icon && iconPosition === "right"
      ? theme.spacings.xxlarge
      : theme.spacings.xsmall};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray6000};
    }
  `}
`;

export const IconWrapper = styled.div<IconProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.gray500};
    height: 2.2rem;
    left: ${iconPosition === "left" && theme.spacings.xsmall};
    position: absolute;
    right: ${iconPosition === "right" && theme.spacings.xsmall};
    width: 2.2rem;
    cursor: pointer;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.small};
    text-align: justify;
    width: 100%;

    #link {
      padding-left: 0.5rem;
    }
  `}
`;

export const Required = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
  `}
`;
