import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./NavBar.css"

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
                    <NavbarBrand className="nav-text" href="/">ORBIT</NavbarBrand>
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
                                <NavLink className="nav-text-side" href="/sightings/">Sightings</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-text-side" id="alert-nav" href="/getout/">GET OUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle className="nav-text-side" nav caret>
                                        User
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="nav-text-side">
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem onClick={this.logout} className="nav-text-side">
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default withRouter(NavBar)