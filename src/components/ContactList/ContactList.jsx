import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { findContact, getContactsList } from 'redux/selectors';

export const ContactList = () => {
  const contactCard = useSelector(getContactsList);
  const filter = useSelector(findContact);
  const dispatch = useDispatch();

  return (
    <ul className={css.contactsList}>
      {contactCard
        .filter(contact =>
          contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(({ id, name, number }) => (
          <li key={id}>
            {name} : {number}
            <button
              className={css.contactsBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
};


