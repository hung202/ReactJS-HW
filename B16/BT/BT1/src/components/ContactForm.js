import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../actions/contacts';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addContact({ id, name, phone, favorite: false }));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
