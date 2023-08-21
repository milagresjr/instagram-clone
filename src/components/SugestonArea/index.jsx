import MyProfile from '../MyProfile';
import { Container } from './styles';
import SugestonList from '../SugestonList';
import Footer from '../Footer';

function SugestonArea() {
  return (
    <Container>
        <MyProfile />
        <SugestonList />
        <Footer />
    </Container>
  );
}

export default SugestonArea;
