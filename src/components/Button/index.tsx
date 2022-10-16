import React from "react";

import * as S from "./styles";

export interface ButtonProps {
  appearance?: "primary" | "secondary";
  sizes?: "small" | "medium" | "large";
  disabled?: boolean;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  appearance = "primary",
  sizes = "medium",
  disabled = false,
  text,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      appearance={appearance}
      sizes={sizes}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
};

export default Button;
