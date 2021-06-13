import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './bigscard2.scss';

const BigScard2 = () => {
    return (
        <div className='bigcontainer'>
            <Container>
                <Row>
                    <Col>
                    <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src="holder.js/100px180"
              />
            </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>


                </Row>
            </Container>
            
        </div>
    )
}

export default BigScard2
