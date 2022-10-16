import React, { useEffect, useState } from "react";
import IconCheck from "../../assets/icons/check";
import IconError from "../../assets/icons/error";
import IconWarning from "../../assets/icons/warning";

import * as S from "./styles";

export interface PasswordRulesProps extends S.AppearancePasswordRulesProps {
  password: string;
}

const PasswordRules = ({ password }: PasswordRulesProps) => {
  const [errorSize, setErrorSize] = useState(false);

  useEffect(() => {
    setErrorSize(password.length >= 8);
  }, [password]);

  return (
    <S.Rule
      appearance={
        password.length ? (!errorSize ? "error" : "correct") : "default"
      }
    >
      <S.Icon
        as={
          password.length ? (!errorSize ? IconError : IconCheck) : IconWarning
        }
      />
      Conter no minimo 8 caracteres
    </S.Rule>
  );
};

export default PasswordRules;
