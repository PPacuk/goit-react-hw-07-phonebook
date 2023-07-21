import css from './App.module.css';
import Section from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <div className={css.contactsWrapper}>
          <Filter />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

