// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { itemsOperations } from 'redux/contacts';
import EditContact from 'components/EditContact';
import PageHeading from 'components/PageHeading';

export default function EditContactPage() {
  return (
    <>
      <PageHeading text="Create contact" />
      <EditContact />
    </>
  );
}
