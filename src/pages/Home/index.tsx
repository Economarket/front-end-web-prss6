import * as S from '../styles';
import SideBar from '../../components/SideBar/sidebar';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Text>Bem vindo a home!</S.Text>
      <SideBar />
    </S.Wrapper>
  );
}
