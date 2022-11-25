import * as S from '../styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRegisterUser } from '../../utils/schema';
import { useForm } from 'react-hook-form';
// import InputPassword from '../../components/InputPassword';
import { updateUser } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { User } from '../../services/models';
import { useSession } from '../../contexts/session';
import ToastHelper from '../../components/Toast/toast';

export default function Profile() {
  const { user } = useSession();

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schemaRegisterUser),
  });

  const onSubmit = async (data: any) => {
    if(!user){
      return;
    }
    const newUser: User = {
      id: user?.id,
      name: data.name,
      email: data.email,
    }
    await updateUser(newUser).then(() => {
      ToastHelper("Dados atualizados com sucesso!", "success");
    }).catch(() => {
      ToastHelper("Erro ao atualizar dados", "error");
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
            {/* <InputPassword
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
            /> */}

            <Button
              text="Salvar Aterações"
              onClick={() => handleSubmit(onSubmit)}
              disabled={formState.isSubmitting}
            />
          </S.Form>
        </S.ProductContainer>
      </S.WrapperRegisteProducts>
    </>
  );
}