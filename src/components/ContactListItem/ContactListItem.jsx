// import ScaleLoader from 'react-spinners/ScaleLoader';
import { FiUser, FiPhone } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './ContactListItem.module.css';
import { itemsOperations } from 'redux/contacts';
export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  // const contactId = useParams();
  // console.log('contactId', contactId);
  // const navigate = useNavigate();
  const deleteListItem = id => {
    console.log(id);
    dispatch(itemsOperations.deleteContacts(id));
  };

  return (
    <>
      <li className={s.item}>
        <NavLink to={`${id}`}>
          <span className={s.graf}>
            <FiUser />
            {name}
          </span>
          <span> : </span>
          <span className={s.graf}>
            <FiPhone /> {number}
          </span>
        </NavLink>
        <Button type="button" onClick={() => deleteListItem(id)}>
          Delete
        </Button>
        {/* <Button type="button">
          <Link
            to={`/contacts/${id}`}
            // className={({ isActive }) => (!isActive ? s.link : s.active)}
          ></Link>
          Edit
        </Button> */}

        {/* <button => 
          type="button"
        
          className={s.button}
         
        >
          {isDeliting ? (
            <ScaleLoader height={15} width={5} margin={2} />
          ) : (
            'Delete'
          )}
        </button> */}
      </li>
    </>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
