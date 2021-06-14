import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import shopno from '../../images/stores/shopno.png';
import meena from '../../images/stores/meena.png';
import unimart from '../../images/stores/unimart.png';
import prince from '../../images/stores/prince.png';
import lavender from '../../images/stores/lavender.png';
import club from '../../images/stores/club.png';
import tsq from '../../images/stores/tsq.png';

const BigScard = () => {
    const data=[
        {
            image:shopno
        }
    ]
    return (
      <Container fluid>
        <Row>
          <Col sm={12} lg={2}>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" ,cursor:'pointer'}}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={shopno}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{ background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={meena}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem'}}
                variant="top"
                src={unimart}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={prince}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={club}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={lavender}
              />
            </Card>
          </Col>
          <Col>
            <Card style={{background:'none',border:'none', paddingLeft: "10px", width: "15rem" }}>
              <Card.Img
                style={{ width:'13rem' }}
                variant="top"
                src={tsq}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default BigScard
