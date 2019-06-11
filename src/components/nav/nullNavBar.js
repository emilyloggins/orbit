import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./NavBar.css"

class nullNavBar extends Component {

    render() {
        return (
            <div>
                <Navbar className="nav-bar-main" light expand="md">
                    <NavbarBrand className="nav-text" href="/">Orbit</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}


export default withRouter(nullNavBar)