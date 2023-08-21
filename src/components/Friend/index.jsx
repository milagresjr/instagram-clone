import { Container, Content, Avatar, InfoProfile, Button } from './styles';

function Friend({nameUser, content}) {
  return (
    <>
        <Container>
            <Content>
                <Avatar />
                <InfoProfile>
                    <h2>{nameUser}</h2>
                    <span>{content}</span>
                </InfoProfile>
                <Button>Seguir</Button>
            </Content>
        </Container>
    </>
  );
}

export default Friend;