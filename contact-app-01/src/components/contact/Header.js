import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../../logo.svg'

class Header extends Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">React Contacts</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to='/'>Index</Link></NavItem>
            <NavItem eventKey={2}><Link to='/new'>New</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header
