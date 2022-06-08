import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { itemsSelectors } from 'redux/contacts';
import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { useGetAllContactsQuery } from 'redux/contacts/auth-operations';
// import Loader from 'components/Loader';
import { useDispatch } from 'react-redux';
import { itemsOperations } from 'redux/contacts';
import { useParams } from 'react-router';
import Filter from 'components/Filter';

export default function ContactList() {
  const filter = useSelector(itemsSelectors.getFilterSelector);
  const dispatch = useDispatch();
  const { userId } = useParams();
  console.log(userId);
  useEffect(() => {
    dispatch(itemsOperations.contacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);
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
    const formNumber = numberFormatting(number);
    const user = { name, number: formNumber };

    dispatch(itemsOperations.addContacts(user));
    toast.success(`${name} was added to contacts!`);
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
  // const deleteListItem = id => {
  //   console.log(id);
  //   dispatch(itemsOperations.deleteContacts(id));
  //   // toast.success(`Contact ${name} successfuly delete`);
  // };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };
  // const getVisibleContacts = createSelector([]);
  const visibleContacts = getVisibleContacts();

  return (
    <Fragment>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="" className={s.label}>
          Name
          <input
            autoComplete="off"
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor="" className={s.label}>
          Number
          <input
            autoComplete="off"
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
        </label>
        <Button type="submit">Create</Button>
      </form>
      <Filter />
      <ul className={s.list}>
        {visibleContacts?.map(contact => (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>

      <ToastContainer />
    </Fragment>
  );
}
        
