import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.header}>
      <NavLink
        to="/"
        className={({ isActive }) => (!isActive ? s.link : s.active)}
      >
        Home page
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => (!isActive ? s.link : s.active)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}


