import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './LandingPage.css'

const LandingPart = () => {
    return (
        <section id='cover'>
            <Container>
                <Row className='justify-content-center'>
                    <h1> Today a READER</h1> 
                    

                </Row>
                <Row className='justify-content-center'>
                   
                    <h1> Tomorrow a LEADER</h1>

                </Row>

            </Container>
            
        </section>
    )
}

export default LandingPart
