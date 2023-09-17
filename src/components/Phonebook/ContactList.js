import React from 'react';
import { DeleteButton } from './Form.styled';

const ContactList = ({ contacts, deleteContact }) => {
  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteButton onClick={() => deleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
