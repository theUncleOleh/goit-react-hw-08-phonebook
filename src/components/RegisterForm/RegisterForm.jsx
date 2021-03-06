import React, { useState } from 'react';
import s from './RegisterForm.module.css';
import ScaleLoader from 'react-spinners/ScaleLoader';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import { useAddContactMutation } from 'redux/contacts/itemsOperations';
export default function RegisterForm({ onSubmit, isLoading }) {
  // const [addContacts] = useAddContactMutation();
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const name = e.currentTarget.elements.name.value;
  //   const phone = e.currentTarget.elements.number.value;
  //   console.log(name);
  //   console.log(phone);
  //   addContacts({ name, phone });
  //   e.currentTarget.reset();
  // };
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
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

    // const user = { name, email, password };
    // console.log(user);
    dispatch(authOperations.register({ name, email, password }));
    // onSubmit(user);
    reset();
  };
  // const numberFormatting = phone => {
  //   const array = [...phone];
  //   for (let i = 3; i < array.length - 1; i += 3) {
  //     array.splice(i, 0, '-');
  //   }
  //   return array.join('');
  // };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    // <Form>
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
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="" className={s.label}>
        Name
        <input
          autoComplete="off"
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="" className={s.label}>
        E-mail
        <input
          autoComplete="off"
          className={s.input}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <label htmlFor="" className={s.label}>
        Password
        <input
          autoComplete="off"
          className={s.input}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </label>
      <button type="submit" disabled={isLoading} className={s.button}>
        {isLoading ? (
          <ScaleLoader height={15} width={5} margin={2} />
        ) : (
          'Log In'
        )}
      </button>
    </form>
  );
}
