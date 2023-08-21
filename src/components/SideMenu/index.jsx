import { Container, Header, InstaIcon, Navigation, ItemMenu, HomeIcon, SearchIcon, ExplorerIcon, ReelsIcon, MessageIcon, NotificationIcon, CreateIcon, Avatar, MenuIcon } from './styles';

function SideMenu() {
  return (
    <>
        <Container>
            <Header>
                <InstaIcon />
                <img src="./public/instagram-logo.png" alt="Logo do Insta" />
            </Header>
            <Navigation>
                <ItemMenu>
                    <HomeIcon className="icon" />
                    <span className='active'>Pagina inicial</span>
                </ItemMenu>

                <ItemMenu>
                    <SearchIcon className="icon" />
                    <span>Pesquisa</span>
                </ItemMenu>

                <ItemMenu>
                    <ExplorerIcon className="icon" />
                    <span>Explorar</span>
                </ItemMenu>

                <ItemMenu>
                    <ReelsIcon className="icon" />
                    <span>Reels</span>
                </ItemMenu>

                <ItemMenu>
                    <MessageIcon className="icon" />
                    <span>Mensagens</span>
                </ItemMenu>

                <ItemMenu>
                    <NotificationIcon className="icon" />
                    <span>Notificacoes</span>
                </ItemMenu>

                <ItemMenu>
                    <CreateIcon className="icon" />
                    <span>Criar</span>
                </ItemMenu>

                <ItemMenu>
                    <Avatar />
                    <span>Perfil</span>
                </ItemMenu>

                <ItemMenu>
                    <MenuIcon className="icon" />
                    <span>Mais</span>
                </ItemMenu>
            </Navigation>
        </Container>
    </>
  );
}

export default SideMenu;