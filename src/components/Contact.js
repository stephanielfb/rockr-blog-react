import React from 'react';

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="phone" placeholder="Phone" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
