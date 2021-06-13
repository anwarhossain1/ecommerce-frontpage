import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import shopno from '../../images/shopno.jpg';

const BigScard = () => {
    const data=[
        {
            image:shopno
        }
    ]
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem'}}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src="holder.js/100px180"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default BigScard
