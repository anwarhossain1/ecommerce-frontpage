import React from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap';
const subNav = () => {
    return (
        <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                NFL
            </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
               <Nav.Link>adasda</Nav.Link>
               <Nav.Link>adasda</Nav.Link>
               <Nav.Link>adasda</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default subNav
