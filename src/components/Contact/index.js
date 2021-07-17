import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
    };

    return (
        <section>
            <h1 className="title">Contact</h1>
            <div className="container">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="fname" name="name" placeholder="Your Name.." defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email.." defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="subject" rows="5" placeholder="Write Message Here.." defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <p>My Phone: 801-657-6979</p>
                <p>My Email: bennyot10@gmail.com</p>
            </div>
        </section>

    )
}

export default Contact;