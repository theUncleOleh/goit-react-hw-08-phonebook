import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/contacts';
// import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { useGetAllContactsQuery } from 'redux/contacts/auth-operations';
// import Loader from 'components/Loader';
import { useDispatch } from 'react-redux';
import { itemsOperations } from 'redux/contacts';
// import Filter from 'components/Filter';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts);
  useEffect(() => {
    dispatch(itemsOperations.contacts());
  }, [dispatch]);

  // const { data: contacts, isLoading, error } = useGetAllContactsQuery();
  // const filter = useSelector(itemsSelectors.getFilterSelector);
  // const getVisibleContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts?.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizeFilter)
  //   );
  // };
  // // const getVisibleContacts = createSelector([]);
  // const visibleContacts = getVisibleContacts();
  return (
    <Fragment>
      {/* <Filter />
      <h2 className={s.title}>Contacts</h2>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>{<Loader />}</>
      ) : contacts ? (
        <>
          <ul className={s.list}>
            {visibleContacts.map(contact => (
              <ContactListItem
                key={contact.id}
                id={contact.id}
                name={contact.name}
                phone={contact.phone}
              />

            ))}
          </ul>
        </>
      ) : null} */}
      <ul className={s.list}>
        {contacts?.map(contact => (
          <li key={contact.id}>{contact.name}</li>
          // <ContactListItem
          //   key={contact.id}
          //   id={contact.id}
          //   name={contact.name}
          //   phone={contact.phone}
          // />
        ))}
      </ul>

      <ToastContainer />
    </Fragment>
  );
}
