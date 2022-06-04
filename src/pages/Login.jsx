import PageHeading from 'components/PageHeading';
import IsUserLogin from 'components/UserLoginForm';

export default function Login() {
  return (
    <>
      <PageHeading text="Login" />
      <IsUserLogin />
    </>
  );
}
