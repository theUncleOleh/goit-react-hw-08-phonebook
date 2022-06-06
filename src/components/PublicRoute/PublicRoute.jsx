import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  //   if (isLoggedIn) {
  //     return children;
  //   }
  //   return <Navigate to="/login" />;
}
