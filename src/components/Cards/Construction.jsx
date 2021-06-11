import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import uni from '../../images/unimart.png'
const Construction = () => {
    return (
        <>
        <Container style={{width:'18rem'}}>
    <Row >
    <Col  ><img src={uni}/></Col>
  </Row>
  <Row>
  <Col sm={8}><img src/></Col>
  <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>

  </Row>
  <Row>

  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
        </Container>
            
        </>
    )
}

export default Construction
