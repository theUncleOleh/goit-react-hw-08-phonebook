import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Loader from '../components/Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PhoneBookPage from '../pages/PhoneBookPage';
// import SecondPage from '../pages/SecondPage';
// import NotFoundPage from '../pages/NotFoundPage';
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const UserContacts = lazy(() => import('../pages/UserContacts.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));
export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<UserContacts />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<Login />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
