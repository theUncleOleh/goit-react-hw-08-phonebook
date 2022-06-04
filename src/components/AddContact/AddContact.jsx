// import { useNavigate } from 'react-router-dom';
// import { useAddUserMutation } from 'redux/contacts/auth-operations';
import { toast } from 'react-toastify';

export default function AddContact({ contacts }) {
  // const navigation = useNavigate();
  const addContacts = user => {
    console.log(user);
    const toNormalizeName = user.name.toLocaleLowerCase();

    const name = contacts?.find(
      ({ name }) => name.toLocaleLowerCase() === toNormalizeName
    );

    if (name) {
      return toast.error(`${user.name} is already in contacts`);
    }

    alert('thank you');
    // toast.success(`${user.name} was added to contacts!`);
    // navigation('/');
  };
  return <></>;
}
