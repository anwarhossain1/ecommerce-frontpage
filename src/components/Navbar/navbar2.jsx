import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar2.scss'
const navbar2 = () => {
    return (
        <>
        <Navbar expand="sm"  className='naav'>
    
            <Nav className="sNav">
              <Nav.Link>Weekly Ad</Nav.Link>
              <Nav.Link>Sell On Smartcart</Nav.Link>
              <Nav.Link>Investor</Nav.Link>
              <Nav.Link>Factory Direct</Nav.Link>
              <Nav.Link>Export</Nav.Link>
              <Nav.Link>Travel/Ticket</Nav.Link>
              <Nav.Link>TREASURE HUNT</Nav.Link>
              <Nav.Link>Shop super deals</Nav.Link>
            </Nav>
            
            
        </Navbar>
       
    </>
    )
}

export default navbar2
