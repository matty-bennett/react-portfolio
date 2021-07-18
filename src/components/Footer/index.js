import React from "react";
import { FiGithub } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { IconContext } from 'react-icons';

function Footer() {
    return (
        <IconContext.Provider
            value={{
                color: 'white'
            }}
        >
            <footer className="footer">
                <ul className="d-flex justify-content-around navbar align-items-center">
                    <li><a href="https://github.com/matty-bennett" target="_blank">< FiGithub size={50} /></a></li>
                    <li><a href="https://www.linkedin.com/in/matt-bennett-692a9a202/" target="_blank">< FiLinkedin size={50} /></a></li>
                    <li><a href="mailto:bennyot10@gmail.com" className="" target="_blank">< AiOutlineMail size={50} /></a></li>
                    <li><a href="https://www.facebook.com/matt.bennett.3139/" className="" target="_blank">< FiFacebook size={50} /></a></li>
                </ul>
            </footer>
        </IconContext.Provider>
    );
};

export default Footer;