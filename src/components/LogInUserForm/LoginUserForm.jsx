import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
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
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
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
      <Button variant="primary" type="submit">
        Log In
      </Button>
      {/* <button type="submit" disabled={isLoading}>
      //   {isLoading ? (
      //      <ScaleLoader height={15} width={5} margin={2} />
      //   ) : (
      //     'Log In'
      //    )}
      // </button>  */}
    </form>
  );
}
