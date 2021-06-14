import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./realestate.scss";
import cement from '../../images/estate/cement.png';
import bricks from '../../images/estate/bricks.png';
import tiles from '../../images/estate/tiles.png';
import rod from '../../images/estate/rod.png';
import paint from '../../images/estate/paint.png';
import port from '../../images/estate/port.png';
import glass from '../../images/estate/glass.png';
import sand from '../../images/estate/sand.png';
import stone from '../../images/estate/stone.png';
const Realestate = () => {
    return (
      <div style={{position:'relative'}}>
        <di>
          <h1>CONSTRUCTION & REAL ESTATE</h1>
        </di>
        <Container fluid>
          <Row className="no-gutters">
            <Col> 
              <Card style={{ paddingLeft: "10px", width: "25rem",height:'388px' ,background:'none' ,border:'' }}>
                <Card.Img
                  style={{ width: "24rem",height:'388px'}}
                  variant="top"
                  src={cement}
                />
              </Card>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: "21rem" }}>
                    <Card.Img
                      style={{ width: "262px", height:'194px' }}
                      variant="top"
                      src={bricks}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col>
                <Card style={{ width: "21rem" }}>
                  <Card.Img
                    style={{ width: "262px", height:'194px' }}
                    variant="top"
                    src={tiles}
                  />
                </Card>
                
                </Col>

              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card style={{  width: "21rem" }}>
                    <Card.Img
                      style={{ width: "262px", height:'194px' }}
                      variant="top"
                      src={rod}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col>
                <Card style={{  width: "21rem" }}>
                  <Card.Img
                    style={{ width: "262px", height:'190px' }}
                    variant="top"
                    src={paint}
                  />
                </Card>
                
                </Col>

              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card style={{  width: "21rem" }}>
                    <Card.Img
                      style={{ width: "262px", height:'194px' }}
                      variant="top"
                      src={port}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col>
                <Card style={{ width: "21rem" }}>
                  <Card.Img
                    style={{ width: "262px", height:'190px' }}
                    variant="top"
                    src={glass}
                  />
                </Card>
                
                </Col>

              </Row>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Card style={{ width: "21rem" }}>
                    <Card.Img
                      style={{ width: "262px", height:'194px' }}
                      variant="top"
                      src={sand}
                    />
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col>
                <Card style={{  width: "21rem" }}>
                  <Card.Img
                    style={{ width: "262px", height:'190px' }}
                    variant="top"
                    src={stone}
                  />
                </Card>
                
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Realestate
