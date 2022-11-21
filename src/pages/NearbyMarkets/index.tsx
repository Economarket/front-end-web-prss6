import { Head } from '../../components/Head';
import { Title } from '../../templates/InternalLayout/styles';

import * as S from '../styles';

export default function NearbyMarkets() {
  return (
    <>
      <Head title='Mercados próximos'/>
      <S.Wrapper>
        <Title> Mercados proximos</Title>
      </S.Wrapper>
    </>
  );
}
