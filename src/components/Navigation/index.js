import React, { useEffect } from 'react';
import { Navbar, Container, Nav, Col, Row } from 'react-bootstrap';

function Navigation(props) {

    const links = [
        'About',
         'Portfolio',
          'Contact',
           'Resume'
        ];
    return (

        <div className="nav">
        <Container className="d-flex">
            
            <h1  style={{width: "100%"}}>
                <a className="nav-text nav-title" style={{fontWeight: "bolder"}} href="/">Matthew Bennett</a>
            </h1>
            <nav style={{width: "100%"}} className="">
                <ul className="d-flex justify-content-around navbar align-items-center">
                    {links.map(link => (
                        <li key={link}>
                            <a
                                href={'#' + link.toLowerCase()}
                                onClick={() => props.setCurrentItem(link)}
                                className={
                                    props.currentPage === link ? 'nav-link active' : 'nav-link'
                                }
                                className="nav-text"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            
        </Container>
        </div>

    );
}

export default Navigation;