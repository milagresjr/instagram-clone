import { Container, Title } from './styles';
import Friend from '../Friend';

function SugestonList({nameUser, content}) {
  return (
    <Container>
        <Title>
          <h2>Sugestões para você</h2>
          <button>Ver todos</button>
        </Title>
        <Friend 
        nameUser="quental_blessed"
        content="Sugestoes para voce"  />
        <Friend 
        nameUser="magicoobeloo"
        content="Novo no instagram"  />
        <Friend 
        nameUser="jorgealiya"
        content="Segue voce"  />
        <Friend 
        nameUser="wilda_miguel09"
        content="Sugestoes para voce"  />
        <Friend 
        nameUser="marcioarielsimao"
        content="Seguido(a) por anair7678"  />
    </Container>
  );
}

export default SugestonList;