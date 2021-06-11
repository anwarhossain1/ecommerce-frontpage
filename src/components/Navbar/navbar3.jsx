import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar2.scss'
const navbar3 = () => {
    return (
        <>
        <Navbar expand="sm"  bg="light">
    
            <Nav style={{paddingLeft:'50px'}}>
              <Nav.Link>Grocery</Nav.Link>
              <Nav.Link>Beauty/Personal Care</Nav.Link>
              <Nav.Link>Toys</Nav.Link>
              <Nav.Link>Fashion</Nav.Link>
              <Nav.Link>Electronics</Nav.Link>
              <Nav.Link>Appliance</Nav.Link>
              <Nav.Link>Home & Furniture</Nav.Link>
              <Nav.Link>Pharmacy</Nav.Link>
              <Nav.Link>Flower</Nav.Link>
              <Nav.Link>Construction</Nav.Link>
            </Nav>
            
            
        </Navbar>
       
    </>
    )
}

export default navbar3
