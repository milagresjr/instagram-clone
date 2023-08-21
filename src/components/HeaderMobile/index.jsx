import { Container, Content, InputSearch, NotificationIcon } from './styles';

function HeaderMobile() {
  return (
        <>
            <Container>
                <img src="./public/instagram-logo.png" alt="Logo do Insta" />
                <Content>
                    <InputSearch type="text" placeholder={'Pesquisar'} />
                    <NotificationIcon />
                </Content>      
            </Container>
        </>
  )
}

export default HeaderMobile;