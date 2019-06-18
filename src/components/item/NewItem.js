import React, { Component } from 'react'
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './Item.css'
import ufo from '../../img/ufo.png'


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
    quantity: ''
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

  submit = () => {

    const ItemObj = {
      name: this.state.name,
      category: this.state.category,
      quantity: this.state.quantity
    }

    this.props.addItem(ItemObj)
      .then((item) => {
        const PackItemObj = {
          packId: this.props.chosenPack,
          itemId: item.length,
        }
        this.props.addJoin(PackItemObj)
      })
    this.props.changeChosenPack(this.props.chosenPack)
    this.props.getJoinTableItems(this.props.chosenPack)
  };

  render() {
    return (
      <div className="new-item-container">
        <div className="new-item-header">
          <img src={ufo} className="logo-main" alt="ufo icon"></img>
          <h1 className="blurb-header">Add Items</h1>
        </div>
        <InputGroup className="new-item-input">
          <Input placeholder="ITEM NAME" id="name" onChange={this.handleFieldChange} />
          <Input onChange={this.handleFieldChange} id="quantity" placeholder="QUANTITY"></Input>
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle className="category-drop-down" caret>
              {this.state.category}
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
        <Button onClick={this.submit} className="new-item-btn" size="lg">Add</Button>
      </div>
    )
  }
}

export default NewItem