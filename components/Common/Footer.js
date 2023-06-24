import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Footer = () => {
    return (
        <>
            <footer className="footer-admin">
                <Container fluid={true} className='container-fluid'>
                    <Row>
                        <Col md='6' className="footer-copyright">
                            <p className="mb-0">Copyright 2023 © <a href="https://digital-artefakt.me">Digital Artefakt</a> All rights reserved.</p>
                        </Col>
                        
                    </Row>
                </Container>
            </footer>

        </>
    )
}

export default Footer