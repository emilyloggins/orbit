import React, { Component } from 'react'
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
} from 'reactstrap';
import './Item.css'
import PackItemManager from '../../modules/PackItemManager'
import ItemManager from '../../modules/ItemManager'

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
    quantity: '',
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

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  cancelCourse() {
    document.querySelector("#name").value = "";
    document.querySelector("#quantity").value = "";
  }

  submit = () => {
    const ItemObj = {
      name: this.state.name,
      category: this.state.category,
      quantity: this.state.quantity
    }

    this.props.addItem(ItemObj)
      .then((item) => {
        const lastItem = item[item.length - 1]
        console.log(lastItem.id)
        const PackItemObj = {
          packId: this.props.chosenPack,
          itemId: lastItem.id,
        }
        this.props.addJoin(PackItemObj)
          .then(() => {
            PackItemManager.getJoinByPackId(this.props.chosenPack)
              .then(objects => {
                const itemsArray = []
                objects.map(item => {
                  ItemManager.getItem(item.itemId)
                    .then(i => {
                      itemsArray.push(i)
                    })
                    .then(() => {
                      this.props.updateState(itemsArray)
                      this.cancelCourse()
                    })
                })
              })
          })
      })
  };

  handleCheck = (evt) => {
    if (evt.target.checked === true) {
      const newPack = {
        id: this.props.chosenPack,
        packed: true
      }
      this.props.updatePack(newPack)
    } else {
      const newPack = {
        id: this.props.chosenPack,
        packed: false
      }
      this.props.updatePack(newPack)
    }
  }
  handleCheckBox(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <div className="new-item-container">
        <Label id="packed-check-label" check>
          <Input onClick={this.handleCheck} id="packed-check" type="checkbox" />{' '}
          PACKED
          </Label>
        <div className="new-item-header">
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

