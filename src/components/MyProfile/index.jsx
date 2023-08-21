import { Container, Content, Avatar, InfoProfile, Button } from './styles';

function MyProfile() {
  return (
    <>
        <Container>
            <Content>
                <Avatar />
                <InfoProfile>
                    <h2>milagresjr7</h2>
                    <span>Milagres Junior</span>
                </InfoProfile>
                <Button>Mudar</Button>
            </Content>
        </Container>
    </>
  );
}

export default MyProfile;