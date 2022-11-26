import * as S from "../styles";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateUser } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { updateUser } from "../../services/user";
import { useSession } from "../../contexts/session";
import ToastHelper from "../../components/Toast/toast";
import { useEffect } from "react";

export default function Profile() {
  const { user } = useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    },
    resolver: yupResolver(schemaUpdateUser),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
      });
    }
  }, [formState, reset]);

  const onSubmit = async (data: any) => {
    if (!user) {
      return;
    }
    const name = data.name ? data.name : user.name;
    const email = data.email ? data.email : user.email;
    const password = localStorage.getItem("password");
    const userUpdate = {
      id: user.id,
      name: name,
      email: email,
      password: password,
    };
    try {
      await updateUser(userUpdate);
      ToastHelper("Dados atualizados com sucesso!", "success");
    } catch (error) {
      ToastHelper("Erro ao atualizar dados", "error");
      console.error(error);
    }
  };
  return (
    <>
      <S.WrapperRegisteProducts>
        <S.Title>Quer atualizar seu perfil?</S.Title>

        <S.ProductContainer>
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

            <Button
              text="Salvar Aterações"
              onClick={handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            />
          </S.Form>
        </S.ProductContainer>
      </S.WrapperRegisteProducts>
    </>
  );
}
