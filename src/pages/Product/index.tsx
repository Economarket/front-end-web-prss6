import IconSearch from '../../assets/icons/search';
import { Head } from '../../components/Head';
import InputText from '../../components/InputText';
import ProductCard from '../../components/ProductCard';
import { products_mock } from '../../mock/mock';
import * as S from '../styles';

export default function Product() {
  return (
    <>
      <Head title="Produtos" />
      <S.Wrapper>
        <S.Title> Produtos</S.Title>

        <S.Form>
          <InputText
            name="buscaProduto"
            placeholder="Nome do produto"
            icon={<IconSearch />}
            iconPosition={'left'}
          />
        </S.Form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          {products_mock.map((p) => (
            <ProductCard product={p} onClick={() => console.log(p.name)} />
          ))}
        </div>
      </S.Wrapper>
    </>
  );
}
