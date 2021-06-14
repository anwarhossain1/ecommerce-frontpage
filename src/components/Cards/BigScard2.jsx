import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './bigscard2.scss';
import laptop from '../../images/big/laptop.png';
import phone from '../../images/big/phone.png';
import kitchen from '../../images/big/kitchen.png';
import personal from '../../images/big/personal.png';
import com from '../../images/big/com.png';

import cleaning from '../../images/big/cleaning.png';
import emu from '../../images/big/emu.png';
import women from '../../images/big/women.png';
import mens from '../../images/big/mens.png';


const BigScard2 = () => {
    return (
      <div className="bigcontainer">
        <Container fluid>
          <Row style={{padding:'30px 20px'}}>
            <Col>
              <Card
                style={{ paddingLeft: "10px", width: "22rem", height: "380px" }}
              >
                  <Card.Title>Up to 70% off | Electronics clearance store</Card.Title>
                <Card.Img
                  style={{paddingLeft:'18px', width: "19rem" }}
                  variant="top"
                  src={laptop}
                />
                <a href="#">See more</a>
              </Card>
              
            </Col>
            <Col><Card
                style={{ paddingLeft: "10px", width: "22rem", height: "380px" }}
              >
                  <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Browse By Store</Card.Title>
                <Row>
                    <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={phone}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={com}
                /></Col>
                </Row>
                <Row>
                <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={kitchen}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={personal}
                /></Col>
                </Row>
              </Card></Col>
            <Col><Card
                style={{ paddingLeft: "10px", width: "22rem", height: "380px" }}
              >
                  <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Everyday Essentials</Card.Title>
                <Row>
                    <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={kitchen}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={personal}
                /></Col>
                </Row>
                <Row>
                <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={cleaning}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={emu}
                /></Col>
                </Row>
              </Card>
              
              
              </Col>
            <Col><Card
                style={{ paddingLeft: "10px", width: "22rem", height: "380px" }}
              >
                  <Card.Title style={{textAlign:'left',fontWeight:'bold'}}>Everyday Essentials</Card.Title>
                <Row>
                    <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={women}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={mens}
                /></Col>
                </Row>
                <Row>
                <Col>
                    <Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={women}
                />
                    </Col>
                    <Col><Card.Img
                  style={{ width: "9rem" }}
                  variant="top"
                  src={mens}
                /></Col>
                </Row>
              </Card></Col>
          </Row>
        </Container>
      </div>
    );
}

export default BigScard2
