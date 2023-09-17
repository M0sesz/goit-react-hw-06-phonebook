import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import { DeleteButton } from './Form.styled';

const ContactList = () => {
  const contacts = useSelector(state => {
    const { contacts, filter } = state.contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  });
  const dispatch = useDispatch();

  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteButton onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
