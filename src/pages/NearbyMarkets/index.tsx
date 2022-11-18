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

export default function NearbyMarkets() {
  return (
    <S.Wrapper>
      <Title> Mercados proximos</Title>
    </S.Wrapper>
  );
}
