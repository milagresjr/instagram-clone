import { Container, HomeIcon, ExplorerIcon, ReelsIcon, MessageIcon, CreateIcon, Avatar } from './styles';

function MenuMobile() {
  return (
    <>
    
        <Container>
            <HomeIcon className="icon" />
            <ExplorerIcon className="icon" />
            <ReelsIcon className="icon" />
            <MessageIcon className="icon" />
            <CreateIcon className="icon" />
            <Avatar />
        </Container>
    
    </>
  );
}

export default MenuMobile;