import React from 'react'
import {Card, Button, Row, Container, Col, ButtonGroup} from 'react-bootstrap';
const CardP = () => {
    return (
      <div>
        <Card style={{paddingLeft:"10px", width: "18rem" }}>
        <ButtonGroup aria-label="Basic example">
        <Button style={{marginRight:"3px",backgroundColor:'black',border:'none'}}>Vegetables</Button>
          <Button style={{marginLeft:"3px",backgroundColor:'red',border:'none'}}>View All</Button>
</ButtonGroup>
          
          <Card.Img style={{height:'200px'}} variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button style={{backgroundColor:"#4371b7" ,borderRadius:"40px", width:"100%"}}>Sign in to add</Button>
            <Container>
              <Row style={{backgroundColor:"#e6f3fc"}}>
                <Col style={{paddingLeft:"2px"}}>inStore</Col>
                <Col style={{paddingLeft:"2px"}}>Pickup</Col>
                <Col style={{paddingLeft:"2px"}}>Delivery</Col>
                <Col style={{paddingLeft:"2px"}}>Shop</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
}

export default CardP
