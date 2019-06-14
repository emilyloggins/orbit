import React, { Component } from 'react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class NewItem extends Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    
      toggleSplit() {
        this.setState({
          splitButtonOpen: !this.state.splitButtonOpen
        });
      }

    render() {
        return (
            <InputGroup>
                <Input />
                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle caret>
                    Category
            </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Food</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Gear</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Weapons</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Misc.</DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
            </InputGroup>
        )
    }
}

export default NewItem