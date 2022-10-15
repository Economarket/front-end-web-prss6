import ExternalAccessContainer from "../../templates/ExternalLayout";

import * as S from "../styles";
import InputText from "../../components/InputText";
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
        </S.Form>
      </ExternalAccessContainer>
    </S.Wrapper>
  );
}
