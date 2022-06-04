import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => (
  <nav className={s.header}>
    <NavLink
      to="/"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Home page
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
