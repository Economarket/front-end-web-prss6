import ExternalAccessContainer from '../../templates/ExternalLayout';

import * as S from '../styles';
import InputText from '../../components/InputText';
import registerUser from '../../assets/registerUser.png';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegisterUser } from '../../utils/schema';
import { useForm } from 'react-hook-form';
import InputPassword from '../../components/InputPassword';
import PasswordRules from '../../components/PasswordRules';
import { postUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schemaRegisterUser),
  });

  const onSubmit = async (data: any) => {
    await postUser(data.name, data.password, data.email).then(() => {
      navigate('/login');
    });
  };
  return (
    <>
      <ExternalAccessContainer
        title="Vamos começar o cadastro?"
        subtitle="Preencha os campos abaixo para criar um novo cadastro."
        image={registerUser}
      >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            {...register('name')}
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
            errorMessage={errors.name?.message}
          />
          <InputText
            {...register('email')}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage={errors.email?.message}
          />
          <InputPassword
            {...register('password')}
            name="password"
            label="Senha"
            placeholder="Digite uma senha"
            errorMessage={errors.password?.message}
          />
          <InputPassword
            {...register('confirmPassword')}
            name="confirmPassword"
            label="Confirme a senha"
            placeholder="Confirme a senha"
            errorMessage={errors.confirmPassword?.message}
          />

          <PasswordRules password={watch('password')} />

          <Button text="Cadastrar" onClick={handleSubmit(onSubmit)} />
        </S.Form>
      </ExternalAccessContainer>
    </>
  );
}
