import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';

function Resume() {
    return (
        <Container>
            <Row>
                <h1>Resume</h1>
                <a href="" download="my resume" target="_blank"> <Button>Download Resume</Button> </ a>
            </Row>
            <Row>
                <h3>Skills:</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Row>
        </Container>
    )
}

export default Resume;