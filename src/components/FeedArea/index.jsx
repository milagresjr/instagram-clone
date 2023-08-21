import Posts from '../Posts';
import Stories from '../Stories';
import { Container } from './styles';

function FeedArea() {
  return (
    <Container>
        <Stories />
        <Posts />
    </Container>
  );
}

export default FeedArea;