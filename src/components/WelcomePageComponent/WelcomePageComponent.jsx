import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
export default function WelcomePageComponent() {
  const name = useSelector(authSelectors.getUserName);
  return (
    <h1>
      Hello <span>{name}</span>!!!
    </h1>
  );
}
