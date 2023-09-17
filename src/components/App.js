import React from 'react';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
