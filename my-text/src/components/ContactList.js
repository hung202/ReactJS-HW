import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, toggleFavorite, deleteContact } from '../reducers/contactSlice';

const ContactList = ({ showFavorites }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = showFavorites
    ? contacts.filter((contact) => contact.isFavorite)
    : contacts;

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
            </div>
            <div>
              <button onClick={() => handleToggleFavorite(contact.id)}>
                {contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              </button>
              <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
