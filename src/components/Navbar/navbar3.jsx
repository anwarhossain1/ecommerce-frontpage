import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar3.scss'
const navbar3 = () => {
    return (
        <>
        <Navbar expand="sm"  bg="light">
    
            <Nav className="container-fluid" style={{paddingLeft:'66px',fontWeight:"bold"}}>
              <Nav.Link >Grocery</Nav.Link>
              <Nav.Link className="item-link">Beauty/Personal Care</Nav.Link>
              <Nav.Link className="item-link">Toys</Nav.Link>
              <Nav.Link className="item-link">Fashion</Nav.Link>
              <Nav.Link className="item-link">Electronics</Nav.Link>
              <Nav.Link className="item-link">Appliance</Nav.Link>
              <Nav.Link className="item-link">Home & Furniture</Nav.Link>
              <Nav.Link className="item-link">Pharmacy</Nav.Link>
              <Nav.Link className="item-link">Flower</Nav.Link>
              <Nav.Link className="item-link">Construction</Nav.Link>
            </Nav>
            
            
        </Navbar>
       
    </>
    )
}

export default navbar3
