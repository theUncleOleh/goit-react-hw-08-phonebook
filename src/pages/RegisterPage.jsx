import PageHeading from 'components/PageHeading';
import ButtonToBack from 'components/ButtonToBack';
import RegisterForm from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <PageHeading text="Register page" />
      <ButtonToBack />
      <RegisterForm />
    </>
  );
}
