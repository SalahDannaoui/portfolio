import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }


  };

  const checkEmpty = (text) => {

    if (!email || !name || !message) {
      setErrorMessage('fields cannot be blank');
      return;
    }
   
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      setErrorMessage('fields cannot be blank');
      return;
    }
   
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='contact'>
      <p>Hello {name}</p>
      <form className="form">
        <h5>email:</h5>
        <input className='email'
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={checkEmpty}
          type="email"
          placeholder="email"
        />
        <h5>name:</h5>
        <input className='name'
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={checkEmpty}
          type="text"
          placeholder="name"
        />
        <h5>message:</h5>
        <textarea className='message'
          value={message}
          name="Message"
          onChange={handleInputChange}
          onBlur={checkEmpty}
          type="text"
          placeholder="message"
        />
        <button className='button' type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;