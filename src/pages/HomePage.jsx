import PageHeading from 'components/PageHeading';
import WelcomePageComponent from 'components/WelcomePageComponent/WelcomePageComponent';
export default function HomePage() {
  return (
    <div>
      <PageHeading text="Home page" />
      <WelcomePageComponent />
    </div>
  );
}
