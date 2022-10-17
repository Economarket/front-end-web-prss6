import ExternalAccessContainer from "../../templates/ExternalLayout";

import * as S from "../styles";
import InputText from "../../components/InputText";
import login from "../../assets/login.png";
import Button from "../../components/Button";
import { signIn } from "../../services/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../utils/schema";
import InputPassword from "../../components/InputPassword";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data: any) => {
    await signIn(data.email, data.password).then((response) => {
      localStorage.setItem("token", response.access_token);

      if (localStorage.getItem("token")) {
        navigate("/");
      }
    });
  };
  return (
    <S.Wrapper>
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

          <Button text="Entrar" onClick={handleSubmit(onSubmit)} />
        </S.Form>

        <S.Text>
          Ainda não possui cadastro?
          <S.Link href="/novo-usuario">Cadastre-se</S.Link>
        </S.Text>
      </ExternalAccessContainer>
    </S.Wrapper>
  );
}
