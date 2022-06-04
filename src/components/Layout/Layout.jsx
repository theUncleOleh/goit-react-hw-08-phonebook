import AppBar from '../AppBar/AppBar';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './Layout.module.css';
export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn);
  return (
    <Container>
      <AppBar>
        <div className={s.layout}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </AppBar>

      <Outlet />
    </Container>
  );
}
