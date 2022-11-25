import * as S from '../styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegisterUser } from '../../utils/schema';
import { useForm } from 'react-hook-form';
import InputPassword from '../../components/InputPassword';
import { postUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { User } from '../../services/models';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState,
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
      navigate('');
    });
  };

  return (
    <>
      <S.WrapperRegisteProducts>
        <S.Title>Deseja atualizar seu perfil?</S.Title>

        <S.ProductContainer>
          <S.Form>
            <InputText
              {...register('name')}
              name="name"
              label="Nome"
              errorMessage={errors.name?.message}
            />
            <InputText
              {...register('email')}
              name="email"
              label="E-mail"
              errorMessage={errors.email?.message}
            />
            <InputPassword
              {...register('password')}
              name="password"
              label="Senha"
              placeholder="Senha atual"
              errorMessage={errors.password?.message}
            />
            <InputPassword
              {...register('confirmPassword')}
              name="confirmPassword"
              label=""
              placeholder="Nova senha"
              errorMessage={errors.confirmPassword?.message}
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