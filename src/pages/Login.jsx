import PageHeading from 'components/PageHeading';
import IsUserLogin from 'components/IsUserLogin';

export default function Login() {
  return (
    <>
      <PageHeading text="Login" />
      <IsUserLogin />
    </>
  );
}
