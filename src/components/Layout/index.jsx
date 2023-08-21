import HeaderMobile from '../HeaderMobile';
import MenuMobile from '../MenuMobile';
import SessionFeed from '../SessionFeed';
import SideMenu from '../SideMenu';
import { Container } from './styles';

function Layout() {
  
  return (
        <>
            <Container>
              <HeaderMobile />
              <SideMenu />
              <SessionFeed />
              <MenuMobile />
            </Container>
        </>
  );

}

export default Layout;