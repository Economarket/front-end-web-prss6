import styled, { css, DefaultTheme } from "styled-components";

import { InputTextProps, IconProps } from ".";

interface ContainerProps extends Pick<InputTextProps, "disabled"> {
  error: boolean;
  hasValue: boolean;
}

const modifiers = {
  appearance: {
    primary: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.borderGray};

      ${Input} {
        background-color: ${theme.colors.background500};
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
  gap: 0.6rem;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.font.family};
    font-size: ${theme.font.font.sizes.small};
    color: ${theme.colors.secondary};
  `}
`;

export const Container = styled.div<ContainerProps>`
  ${({ theme, disabled, error }) => css`
    position: relative;

    ${error && modifiers.error(theme)};
    ${disabled && modifiers.disabled(theme)};
  `}
`;

export const InputWrapper = styled.div<InputTextProps>`
  ${({ theme, sizes, appearance }) => css`
    border: 0.1rem solid ${theme.colors.gray300};
    border-radius: ${theme.border.radius.large};
    display: flex;
    align-items: center;

    &:focus,
    &:focus-within,
    &:active {
      border: ${`0.1rem solid ${theme.colors.borderBlue}`};
      box-shadow: ${"0px 0px 0px 4px rgba(99, 131, 123, 0.2)"};
      border-radius: ${theme.border.radius.large};
    }

    ${!!sizes && modifiers.sizes[sizes](theme)};
    ${!!appearance && modifiers.appearance[appearance](theme)};
  `}
`;

export const Input = styled.input<InputTextProps>`
  ${({ theme, iconPosition, icon }) => css`
    border: 0;
    border-radius: ${theme.border.radius.large};
    color: ${theme.colors.secondary};
    font-family: ${theme.font.font.family};
    font-size: ${theme.font.font.sizes.medium};
    padding-right: ${icon && iconPosition === "right"
      ? theme.spacings.xxlarge
      : theme.spacings.xsmall};
    padding-left: ${iconPosition === "left"
      ? theme.spacings.xxlarge
      : theme.spacings.xsmall};
    outline: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const IconWrapper = styled.div<IconProps>`
  ${({ theme, iconPosition }) => css`
    position: absolute;
    color: ${theme.colors.gray500};
    height: 2.2rem;
    width: 2.2rem;
    right: ${iconPosition === "right" && theme.spacings.xsmall};
    left: ${iconPosition === "left" && theme.spacings.xsmall};
    cursor: pointer;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
    font-size: ${theme.font.font.sizes.small};
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    position: absolute;
    margin-top: 0.4rem;
    text-align: justify;

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
