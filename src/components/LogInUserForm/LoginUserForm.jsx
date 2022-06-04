import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
export default function LoginUserForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'mail':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    const user = { email, password };
    console.log(user);
    onSubmit(user);
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        E-mail
        <input
          autoComplete="off"
          type="email"
          name="mail"
          value={email}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <label htmlFor="">
        Password
        <input
          autoComplete="off"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <ScaleLoader height={15} width={5} margin={2} />
        ) : (
          'Log In'
        )}
      </button>
    </form>
  );
}
