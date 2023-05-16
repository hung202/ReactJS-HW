import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    addFavorite: (state, action) => {
      const contact = state.find(contact => contact.id === action.payload);
      if (contact) {
        contact.favorite = true;
      }
    },
    removeFavorite: (state, action) => {
      const contact = state.find(contact => contact.id === action.payload);
      if (contact) {
        contact.favorite = false;
      }
    }
  }
});

export const { addContact, deleteContact, addFavorite, removeFavorite } = contactsSlice.actions;
export default contactsSlice.reducer;
