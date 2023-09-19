import { createSlice } from '@reduxjs/toolkit';

let nextContactId = 1;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    filteredContacts: [],
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = { ...action.payload, id: nextContactId++ };
      state.contacts.push(newContact);

      if (newContact.name.toLowerCase().includes(state.filter.toLowerCase())) {
        state.filteredContacts.push(newContact);
      }
    },
    deleteContact: (state, action) => {
      const contactIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (contactIndex !== -1) {
        state.contacts.splice(contactIndex, 1);
      }

      const filteredIndex = state.filteredContacts.findIndex(
        contact => contact.id === action.payload
      );
      if (filteredIndex !== -1) {
        state.filteredContacts.splice(filteredIndex, 1);
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filteredContacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
