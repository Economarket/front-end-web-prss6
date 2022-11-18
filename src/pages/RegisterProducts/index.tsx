import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import IconChevronDown from '../../assets/icons/chevronDown';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import { postProduct } from '../../services/product';
import { postUser } from '../../services/user';
import { Title } from '../../templates/InternalLayout/styles';
import { schemaRegisterProduct } from '../../utils/schema';
import * as S from '../styles';
import './styles';
import { ProductContainer } from './styles';

export default function RegisterProducts() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      marca: '',
      unidade: '',
      valor: '',
      categoria: '',
      mercado: '',
    },
    resolver: yupResolver(schemaRegisterProduct),
  });

  const onSubmit = async (data: any) => {
    await postProduct(
      data.name,
      data.marca,
      data.unidade,
      data.valor,
      data.categoria,
      data.mercado
    ).then(() => {
      navigate('/cadastroprodutos');
    });
  };
  return (
    <S.Wrapper>
       <Title>Vamos cadastrar um produto?</Title>
      <ProductContainer>
      <S.Form>
        <InputText
          {...register('name')}
          name="name"
          label="Nome"
          placeholder="Digite o nome do produto"
          errorMessage={errors.name?.message}
        />
        <InputText
          {...register('marca')}
          name="marca"
          label="Marca"
          placeholder="Digite a marca"
          errorMessage={errors.marca?.message}
        />
        <InputText
          {...register('unidade')}
          name="unidade"
          label="Unidade"
          placeholder="Digite a unidade"
          errorMessage={errors.unidade?.message}
        />
        <InputText
          {...register('valor')}
          name="valor"
          label="Valor"
          placeholder="Digite o valor"
          errorMessage={errors.valor?.message}
        />
        <InputText
          {...register('categoria')}
          name="categoria"
          label="Categoria"
          placeholder="Aqui precisamos chamar as categorias"
          errorMessage={errors.categoria?.message}
        />
        <InputText
          {...register('mercado')}
          name="mercado"
          label="Mercado"
          placeholder="Digite o mercado"
          errorMessage={errors.mercado?.message}
        />

        <Button text="Cadastrar" onClick={handleSubmit(onSubmit)} />
      </S.Form>
      </ProductContainer>
    </S.Wrapper>
  );
}
