import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { FcLinux } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authOperations } from 'redux/auth';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  console.log(name);
  return (
    <div className={s.container}>
      <span>
        <FcLinux size={35} />
      </span>
      <span>Wellcome, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </Button>
      {/* <button>Log Out</button> */}
    </div>
  );
}
