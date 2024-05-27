import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ( { contacts, addContact}) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (duplicate === false) {
      addContact(name, phone, email)
      setName("");
      setPhone("");
      setEmail("");
      
      //const form = document.getElementById('contactForm');
      //const submitter = document.querySelector('button[value=submit]');
      //const formData = new FormData(form, submitter);
      //addContact(formData.name, formData.phone , formData.email);
      
    }
  }; 
  
  useEffect(() => {
    for (let i = 0; i < contacts.length; i++) {
      if (name === contacts[i].name) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }
  }},[name, contacts, duplicate]);

  
    
  

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact {duplicate ? " - Name Already Exists" : ""}</h2>
        <ContactForm 
        name={name} setName={setName}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        handleSubmit={handleSubmit} /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
