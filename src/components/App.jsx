import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout/Layout';
import Loader from '../components/Loader/Loader';
// import PhoneBookPage from '../pages/PhoneBookPage';
// import SecondPage from '../pages/SecondPage';
// import NotFoundPage from '../pages/NotFoundPage';
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const ContactsListPage = lazy(() => import('../pages/ContactsListPage.jsx'));
const Login = lazy(() => import('../pages/Login.jsx'));
const UserContacts = lazy(() => import('../pages/UserContacts.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));
export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactsListPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<Login />} />
            <Route path="contacts" element={<UserContacts />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
