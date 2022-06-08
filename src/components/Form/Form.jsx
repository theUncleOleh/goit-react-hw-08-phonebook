import React, { useState } from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';

// import { useAddContactMutation } from 'redux/contacts/itemsOperations';
export default function Form({ onSubmit, isLoading }) {
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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formPhone = numberFormatting(number);
    const contact = { name, number: formPhone };
    onSubmit(contact);
    console.log('contact', contact);
    reset();
  };
  const numberFormatting = number => {
    const array = [...number];
    for (let i = 3; i < array.length - 1; i += 3) {
      array.splice(i, 0, '-');
    }
    return array.join('');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="">
        Number
        <input
          autoComplete="off"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? (
          <ScaleLoader height={15} width={5} margin={2} />
        ) : (
          'Create'
        )}
      </button>
    </form>
  );
}
