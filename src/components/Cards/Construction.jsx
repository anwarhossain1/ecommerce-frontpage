import React from 'react';
import {Container, Row, Col, Image, Form} from 'react-bootstrap';
import uni from '../../images/unimart.png';
import './construction.scss';
const Construction = () => {
    return (
      <div style={{position:'relative'}}>
        <Container fluid style={{position:'relative'}}>
          <Row fluid >
            <Col>
              <img style={{ width: "18rem" }} src={uni} />
            </Col>
            <Col>
              <Row>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
              <Row>
              <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
              <Row>
              <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
              <Row>
              <Col><img style={{ width: "5rem" }} src={uni} /></Col>
                <Col><img style={{ width: "5rem" }} src={uni} /></Col>
              </Row>
            </Col>
          </Row>
          {/* <Row>
            <Col sm={8}>
              <img src />
            </Col>
            <Col sm>sm=dytrue</Col>
            <Col sm>sm=true</Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row> */}
        </Container>
      </div>
    );
}

export default Construction
