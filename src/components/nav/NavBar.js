import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./NavBar.css"
import orbitIcon from '../../img/logo/OrbitLogo2.png'

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    logout = () => {
        this.props.clearUser()
    }
    
    render() {
        return (
            <div>
                <Navbar className="nav-bar-main" light expand="md">
                    <NavbarBrand className="nav-text" href="/"><img src={orbitIcon} className="nav-logo"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-text-side" href="/packs/">Pack</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text-side" href="/connect/">Connect</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text-side" id="alert-nav" href="/getout/">GET OUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text-side" onClick={this.logout}>Log Out</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default withRouter(NavBar)