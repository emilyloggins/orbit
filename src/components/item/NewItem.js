import React, { Component } from 'react'
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './Item.css'

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

  state = {
    name: '',
    category: '',
  };

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

  // clearFields() {
  //     this.preventDefault();
  //     this.target.reset();
  // };
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  submit = (e) => {

    const obj = {
      name: this.state.name,
      category: e.target.value
    }

    this.props.addItem(obj)
    // this.clearFields()
  };

  render() {
    console.log(this.props.currentPack)
    return (
      <div className="new-item-container">
        <h1 className="blurb-header">Add Items to {this.props.currentPack}</h1>
        <p className="blurb-content">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
        <InputGroup className="new-item-input">
          <Input id="name" onChange={this.handleFieldChange} />
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Category
            </DropdownToggle>
            <DropdownMenu ref={(input) => this.menu = input}>
              <DropdownItem onClick={() => this.setState({ category: 'Food' })} value="Food">Food</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.setState({ category: 'Gear' })} value="Gear">Gear</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.setState({ category: 'Weapon' })} value="Weapons">Weapons</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.setState({ category: 'Misc' })} value="Misc">Misc.</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>
    )
  }
}

export default NewItem