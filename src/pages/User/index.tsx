import ExternalAccessContainer from "../../templates/ExternalLayout";

import * as S from "../styles";
import InputText from "../../components/InputText";
<<<<<<< HEAD
import register from "../../assets/register.png";
import Button from "../../components/Button";

export default function User() {
  return (
    <S.Wrapper>
      <ExternalAccessContainer
        title="Novo cadastro"
        subtitle="Preencha os campos abaixo para criar um novo cadastro"
        image={register}
      >
        <S.Form>
          <InputText
            name="nome"
            label="Nome"
            placeholder="Digite seu nome"
          ></InputText>
          <InputText
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          ></InputText>
          <InputText
            name="password"
            label="Senha"
            placeholder="Digite uma senha"
          ></InputText>
          <InputText
            name="confirm"
            label="Confirme a senha"
            placeholder="Confirme a senha"
          ></InputText>

          <S.TextPassword>No mínimo 8 caracteres</S.TextPassword>

          <Button text="Cadastrar" />
=======
import registerUser from "../../assets/registerUser.png";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "../../services/auth";
import { schemaRegisterUser } from "../../utils/schema";
import { useForm } from "react-hook-form";
import InputPassword from "../../components/InputPassword";
import PasswordRules from "../../components/PasswordRules";

export default function User() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schemaRegisterUser),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    await signIn(data.email, data.password);
  };
  return (
    <S.Wrapper>
      <ExternalAccessContainer
        title="Vamos começar o cadastro?"
        subtitle="Preencha os campos abaixo para criar um novo cadastro."
        image={registerUser}
      >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            {...register("name")}
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
            errorMessage={errors.name?.message}
          />
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
            placeholder="Digite uma senha"
            errorMessage={errors.password?.message}
          />
          <InputPassword
            {...register("confirmPassword")}
            name="confirmPassword"
            label="Confirme a senha"
            placeholder="Confirme a senha"
            errorMessage={errors.confirmPassword?.message}
          />

          <PasswordRules password={watch("password")} />

          <Button text="Cadastrar" onClick={handleSubmit(onSubmit)} />
>>>>>>> 292c0ed452006add0c7595c69fdfcfb3faed171f
        </S.Form>
      </ExternalAccessContainer>
    </S.Wrapper>
  );
}
