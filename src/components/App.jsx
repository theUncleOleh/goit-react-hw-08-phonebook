import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Loader from '../components/Loader/Loader';
import { authOperations } from '../redux/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ProtectedRout from 'components/ProtectedRout/ProtectedRout';
import ProtectedLoginRoute from 'components/ProtectedLoginRoute/ProtectedLoginRoute';

// import PhoneBookPage from '../pages/PhoneBookPage';
// import SecondPage from '../pages/SecondPage';
// import NotFoundPage from '../pages/NotFoundPage';
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const UserContacts = lazy(() => import('../pages/UserContacts.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));
const EditContactPage = lazy(() => import('../pages/EditContactPage.jsx'));
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <ProtectedRout>
                  <UserContacts />
                </ProtectedRout>
              }
            />
            <Route path="contacts/:contactId" element={<EditContactPage />} />

            <Route path="register" element={<RegisterPage />} />
            <Route
              path="login"
              element={
                <ProtectedLoginRoute>
                  <Login />
                </ProtectedLoginRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
