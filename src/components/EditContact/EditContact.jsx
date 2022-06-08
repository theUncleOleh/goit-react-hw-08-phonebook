import { useNavigate, useParams } from 'react-router-dom';
import { itemsOperations } from 'redux/contacts';
import { useState } from 'react';
// import { useAddUserMutation } from 'redux/contacts/auth-operations';
import { itemsSelectors } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import Form from 'components/Form/Form';
export default function EditContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(itemsSelectors.getContactsSelector);
  const navigation = useNavigate();
  const { contactId } = useParams();
  console.log(contactId);
  const dispatch = useDispatch();
  // const addContacts = contact => {
  //   console.log(contact);
  //   const toNormalizeName = contact.name.toLocaleLowerCase();

  //   const name = contacts?.find(
  //     ({ name }) => name.toLocaleLowerCase() === toNormalizeName
  //   );

  //   // if (name) {
  //   //   return toast.error(`${contact.name} is already in contacts`);
  //   // }
  //   const updateUser = contacts.find(({ id }) => id === contactId);
  //   console.log('updateUser', updateUser);

  //   if (updateUser) {
  //     dispatch(itemsOperations.updateContacts(contactId, contact));
  //     toast.success(`${contact.name} was added to contacts!`);
  //     navigation('/contacts');
  //   }
  // };

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
    // const toNormalizeName = name.toLocaleLowerCase();
    // const name = contacts?.find(
    //   ({ name }) => name.toLocaleLowerCase() === toNormalizeName
    // );
    const formPhone = numberFormatting(number);
    const contact = { name, number: formPhone };

    // onSubmit(contact);
    console.log(contact);

    const updateUser = contacts.find(({ id }) => id === contactId);
    console.log('updateUser', updateUser);

    if (!updateUser) {
      return;
    }
    dispatch(itemsOperations.updateContacts(contactId, contact));
    toast.success(`${contact.name} was added to contacts!`);
    navigation('/contacts');
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
      <button type="submit">Edit</button>
    </form>
  );
}
