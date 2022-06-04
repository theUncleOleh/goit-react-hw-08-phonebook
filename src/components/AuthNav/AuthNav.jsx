import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';
const AuthNav = () => (
  <nav className={s.header}>
    <NavLink
      to="/register"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) => (!isActive ? s.link : s.active)}
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
