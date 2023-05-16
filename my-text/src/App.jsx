import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


function App() {
  const [showFavorites, setShowFavorites] = useState(true);

  const handleAddToFavorites = () => {
    setShowFavorites(true);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm onAddToFavorites={handleAddToFavorites} />
      <h2>All Contacts</h2>
      <ContactList showFavorites={false} />
      
      <h2>Favorite Contacts</h2>
      <ContactList showFavorites={true} />

    </div>
  );
}

export default App;
