import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import { DeleteButton } from './Form.styled';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </DeleteButton>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
