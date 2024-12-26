import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'

import Todo from './Todo'
import Timer from './Timer'


export default function Dash() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 25*60);

    

    return (
        <Container>
          <h1 className='mb-5'>My Coding Dashboard</h1>
          <Row>
            <Col>
            <Timer expiryTimestamp={time} />
            </Col>
            <Col>
            <Todo/>
            </Col>
          </Row>
          
        </Container>
    )
}