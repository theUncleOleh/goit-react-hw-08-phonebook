import { useLocation, useNavigate } from 'react-router-dom';
import s from './ButtonToBack.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function BackToTrendButton() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(navigate);
  const backToTrendButton = () => {
    navigate(location?.state?.from ?? '/');
  };
  return <Button onClick={backToTrendButton}>Previous page</Button>;
}
