import React, { forwardRef } from "react";

import * as S from "./styles";

export interface IconProps {
  iconPosition?: "left" | "right";
  iconClick?: () => void;
  icon?: React.ReactElement;
}

export interface InputTextProps extends IconProps {
  appearance?: "primary" | "secondary";
  sizes?: "small" | "medium" | "large";
  type?: "text" | "password" | "number";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  href?: string;
  label?: string;
  maxLength?: number;
  name?: string;
  placeholder?: string;
  required?: boolean;
  text?: string;
  value?: string;
}

const InputText = (
  {
    appearance = "primary",
    sizes = "medium",
    type = "text",
    onChange,
    autoFocus,
    disabled = false,
    errorMessage,
    href,
    label,
    maxLength,
    name,
    placeholder,
    required,
    text,
    value,
    iconPosition = "right",
    iconClick,
    icon,
    ...props
  }: InputTextProps,
  ref:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined
) => {
  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor={name}>
          {required ? (
            <>
              {label} <S.Required>*</S.Required>
            </>
          ) : (
            label
          )}
        </S.Label>

        <S.Container
          disabled={disabled}
          error={!!errorMessage}
          hasValue={!!value || !!placeholder}
        >
          <S.InputWrapper appearance={appearance} sizes={sizes}>
            <S.Input
              type={type}
              onChange={onChange}
              value={value}
              disabled={disabled}
              placeholder={placeholder}
              icon={icon}
              iconPosition={iconPosition}
              name={name}
              ref={ref}
              autoFocus={autoFocus}
              maxLength={maxLength}
              {...props}
            />

            {!!icon && (
              <S.IconWrapper iconPosition={iconPosition} onClick={iconClick}>
                {icon}
              </S.IconWrapper>
            )}
          </S.InputWrapper>
        </S.Container>
        {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
      </S.Wrapper>
    </>
  );
};

export default forwardRef(InputText);
