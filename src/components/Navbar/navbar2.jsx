import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './navbar2.scss';
import hamburger from '../../images/menu(1).png';
import DrawerToggleButton from '../DrawerToggleButton';
const navbar2 = (props) => {
    return (
        <>
        <Navbar expand="sm"  className='naav' variant="dark">
    
            <Nav>
              <Nav.Link><DrawerToggleButton click={props.drawerClickHandler} /></Nav.Link>
              <Nav.Link>Weekly Ad</Nav.Link>
              <Nav.Link>Sell On Smartcart</Nav.Link>
              <Nav.Link>Investor</Nav.Link>
              <Nav.Link>Factory Direct</Nav.Link>
              <Nav.Link>Export</Nav.Link>
              <Nav.Link>Travel/Ticket</Nav.Link>
              <Nav.Link className="navbar-right"  style={{backgroundColor:'#ff0042',color:'#f5f5f6' }}>TREASURE HUNT</Nav.Link>
              <Nav.Link>Shop super deals</Nav.Link>
            </Nav>
            
            
        </Navbar>
       
    </>
    )
}

export default navbar2
