import { ChangeEvent, useState } from "react";
import ExternalAccessContainer from "../../templates/ExternalLayout";

import * as S from "../styles";
import InputText from "../../components/InputText";
import login from "../../assets/login.png";
import Button from "../../components/Button";
import { signIn } from "../../services/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils/schema";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    await signIn(data.email, data.password);
  };
  return (
    <S.Wrapper>
      <ExternalAccessContainer title="Oi! Vamos começar?" image={login}>
        <S.Form onSubmit={onSubmit}>
          <InputText
            {...register("email")}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage={errors.email?.message}
          />

          <InputText
            {...register("password")}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={errors.password?.message}
          />

          <Button text="Entrar" onClick={handleSubmit(onSubmit)} />
        </S.Form>
        <S.Text>
          Ainda não possui cadastro?
          <S.Link>Cadastre-se</S.Link>
        </S.Text>
      </ExternalAccessContainer>
    </S.Wrapper>
  );
}
