import css from './ContactForm.module.css';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { Notify } from 'notiflix';
import { getContactsList } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactCard = useSelector(getContactsList);
  const dispatch = useDispatch();
  
  const handleNameInput = e => {
    setName(e.target.value);
  };

  const handleNumberInput = e => {
    setNumber(e.target.value);
  };

    const isOnList = contactCard
      .map(contact => contact.name.toLocaleLowerCase())
      .includes(name.toLocaleLowerCase());

  const handleSubmit = e => {
    e.preventDefault();
    if (isOnList) {
      Notify.failure(`${name} is already in contact list!`);
    } else {
      dispatch(addContact(name, number));
      Notify.success(`${name} added to contact list!`);
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.formInput}
        placeholder="f.e Mateusz Bambik"
        value={name}
        onChange={handleNameInput}
      />

      <p>Number</p>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[.\s]?\(?\d{1,3}?\)?[.\s]?\d{1,4}[.\s]?\d{1,4}[.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.formInput}
        placeholder="666 666 666"
        value={number}
        onChange={handleNumberInput}
      />
      <button type="submit" className={css.formBnt}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
