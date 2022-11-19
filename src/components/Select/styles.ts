import styled, { css, DefaultTheme } from "styled-components";
import Select from "react-select";

import { SelectProps } from ".";
import IconChevronDownSelect from "../../assets/icons/chevronDownSelect";

const CLASS_NAME_PREFIX = "zelo-select";

type ContainerProps = { error: boolean } & SelectProps;

const modifiers = {
  error: (theme: DefaultTheme) => css`
    border: 0.2rem solid ${theme.colors.error300};

    &:focus,
    &:focus-within,
    &:active,
    &:hover {
      border: 0.2rem solid ${theme.colors.error300};
    }
  `,
};

export const WrapperSelect = styled(Select).attrs({
  classNamePrefix: CLASS_NAME_PREFIX,
})<ContainerProps>`
  ${({ theme, error }) => css`
    .${CLASS_NAME_PREFIX} {
      &__control {
        border: none;
        border-radius: ${theme.border.radius.large};
        box-shadow: none;
        background-color: ${theme.colors.whiteFull};
        border: 1px solid ${theme.colors.whiteFull};
        cursor: pointer;
        caret-color: transparent;
        border: 1px solid ${theme.colors.gray300};
        height: 4.2rem;
        min-width: 24rem;

        :hover {
          border: 1px solid ${theme.colors.gray300};
        }

        :focus,
        :focus-within,
        :active {
          outline: none;
          border: 0.1rem solid ${theme.colors.blue300};
          box-shadow: 0px 0px 0px 4px rgba(99, 131, 123, 0.2);
          border-radius: ${theme.border.radius.large};
        }

        ${error && modifiers.error(theme)};
      }

      &__value-container {
        padding: 1rem 3rem 1rem 1.4rem;
      }

      &__input-container {
        margin: 0;
        padding: 0;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray};
        font: ${theme.font.family.primary};
      }

      &__input {
        width: 100%;
        cursor: text;
      }

      &__placeholder {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray};
        font: ${theme.font.family.primary};
      }

      &__single-value {
        margin: 0;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray};
        font: ${theme.font.family.primary};
      }

      &__menu {
        border: none;
      }

      &__menu-list {
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.gray};
        font: ${theme.font.family.primary};

        ::-webkit-scrollbar {
          background-color: ${theme.colors.gray300};
        }

        ::-webkit-scrollbar-thumb {
          -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
          background-color: ${theme.colors.gray};
        }
      }

      &__option {
        padding: 0.6rem 1rem;
        cursor: pointer;

        &--is-selected {
          background-color: ${theme.colors.whiteFull};
          color: ${theme.colors.gray};
        }

        &--is-focused,
        :active {
          background-color: ${theme.colors.gray300};
        }
      }

      &__indicator-separator {
        background: none;
      }

      &__indicator {
        visibility: hidden;
      }

      &__input[style] {
        color: ${theme.colors.gray} !important;
      }

      &__single-value {
        color: ${theme.colors.gray};
      }
    }
  `}
`;

export const ArrowDown = styled(IconChevronDownSelect)`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    right: 0;
    position: absolute;
    width: 24px;
  `}
`;

export const WrapperLabel = styled.div`
  margin-bottom: 0.6rem;
`;

export const Label = styled("label")`
  ${({ theme }) => css`
    color: ${theme.colors.primary500};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error500};
    font-size: ${theme.font.sizes.small};
    margin-top: 0.4rem;
    position: absolute;
    width: 100%;
  `}
`;
