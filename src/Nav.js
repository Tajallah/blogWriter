import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from 'react-router-dom';

function Navigation() {
  return (
    <div>
    <Nav>
      <h3> Logo</h3>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Writer">Writer</NavLink>
        </NavItem>
    </Nav>
    </div>
  )
}

export default Navigation;
