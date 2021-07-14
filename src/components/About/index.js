import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import profile from '../../assets/images/portfolio-pic.jpg';
import '../../index.css';

function About() {
    return (
        <div className="about fluid">
            <Container className="d-flex justify-content-center fluid">
                <Row className="align-items-baseline">
                    <Col>
                        <img src={profile} className="profile-img" height="400px" alt="Matthew" />
                    </Col>
                    <Col className="intro">
                        <h1 className="about-title" style={{fontWeight: "bold"}}>Hello There!</h1>
                        <h3>My name is Matthew...</h3>
                    </Col>
                </Row>
            </Container>
            <Container className="d-flex justify-content-center fluid">
                <Row>
                    <h3 style={{fontWeight: "bold"}}>I'm a Full Stack Web Developer.</h3>
                    <p className="about-text">Everything I've learned about software development comes from The University of Utah's Full Stack Web Development Course. I've continued to teach myself new development skills through online resources as I seek new employment opportunities. If you'd like to view my work, you'll find a collection of my projects at the link above.</p>
                </Row>
            </Container>
        </div>
    );
}

export default About;