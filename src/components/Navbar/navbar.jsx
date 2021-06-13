import React from 'react'
import {Navbar,Nav,Container, InputGroup, FormControl, Dropdown} from "react-bootstrap";
import subNav from './subNav';
import scart from '../../images/logo.png';
import camera from '../../images/camera.png';
import search from '../../images/search.png';
import bd from '../../images/bangladesh.png';
import signIn from '../../images/refer.png';
import app from '../../images/play.png';
import cart from '../../images/trolley.png';
import "./navbar.scss";
const navbar = () => {
    return (
      <>
        <Navbar className="main-nav" collapseOnSelect expand="sm" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link className="smart-cart">
                <img src={scart} />
              </Nav.Link>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:'#f1f2f2',color:'#a89f93',borderColor:'#f1f2f2'}}>
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* //<InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                </InputGroup.Prepend>
                <FormControl
                  placeholder="What are you looking for or search by image"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Prepend >
                <img className='camera' src={camera}/>
                </InputGroup.Prepend>
                <InputGroup.Prepend >
                <img className='search' src={search}/>
                </InputGroup.Prepend>
                
              </InputGroup>
              <Nav.Link><img className='bangladesh' src={bd} /></Nav.Link>
              <Nav.Link><img className='signin' src={signIn}/><span style={{fontSize:"10px",color:'white',fontWeight:'bold'}}>Sign In/Join Free</span></Nav.Link>
              <Nav.Link><img className='app' src={app}/>Apps</Nav.Link>
              <Nav.Link><img className='bangladesh' src={cart}/>Cart</Nav.Link>
              
              {/* <Nav.Link>language dropdown</Nav.Link> */}
            </Nav>
            {/* <Nav pullRight>
              <Nav.Link>SignIn</Nav.Link>
              <Nav.Link>Apps</Nav.Link>
              <Nav.Link>carts</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default navbar
