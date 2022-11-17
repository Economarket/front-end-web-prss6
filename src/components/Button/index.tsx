import React from "react";

import * as S from "./styles";

export interface ButtonProps {
  appearance?: "primary" | "secondary" | "ghost";
  sizes?: "small" | "medium" | "large";
  disabled?: boolean;
  text?: string;
  icon?: React.ComponentType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  appearance = "primary",
  sizes = "medium",
  disabled = false,
  text,
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      appearance={appearance}
      sizes={sizes}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
    >
      {icon ? <S.Icon as={icon} sizes={sizes} /> : text}
    </S.Button>
  );
};

export default Button;
