import ExternalAccessContainer from "../../templates/ExternalLayout";

import * as S from "../styles";
import InputText from "../../components/InputText";
import login from "../../assets/login.png";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../utils/schema";
import InputPassword from "../../components/InputPassword";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "../../contexts/session";

export default function Login() {
  const navigate = useNavigate();
  const { signin, user } = useSession();

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
      notify();
    }
  };

  const toastId = React.useRef(null);
  const customId = "custom-id-yes";

  const notify = () => {
    if (!toast.isActive(customId)) {
      toast("Usuário ou senha inválidos.", {
        toastId: customId,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    handleSubmit(onSubmit);
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
