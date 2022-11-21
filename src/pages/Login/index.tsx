import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ExternalAccessContainer from "../../templates/ExternalLayout";
import login from "../../assets/login.png";

import InputText from "../../components/InputText";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import ToastHelper from "../../components/Toast/toast";

import { schemaLogin } from "../../utils/schema";
import { useSession } from "../../contexts/session";

import * as S from "../styles";

export default function Login() {
  const { signin } = useSession();

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data: any) => {
    try {
      await signin(data.email, data.password);
    } catch (error) {
      console.error(error);
      ToastHelper("Usuário ou senha inválidos.", "error");
    }
  };

  return (
    <>
      <ExternalAccessContainer title="Que bom te ver novamente!" image={login}>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            {...register("email")}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage={errors.email?.message}
          />

          <InputPassword
            {...register("password")}
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            errorMessage={errors.password?.message}
          />

          <Button
            text="Entrar"
            onClick={handleSubmit(onSubmit)}
            disabled={formState.isSubmitting}
          />
        </S.Form>

        <S.Text>
          Ainda não possui cadastro?
          <S.Link href="/novo-usuario">Cadastre-se</S.Link>
        </S.Text>
      </ExternalAccessContainer>
    </>
  );
}
