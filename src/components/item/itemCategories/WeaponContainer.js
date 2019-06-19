import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'


class WeaponContainer extends Component {

    handleDelete = (itemId) => {
        // console.log("delete!")
        this.props.deleteItem(itemId)
        // this.props.deleteJoin(packItemId)
        this.props.changeChosenPack(this.props.chosenPack)
        this.props.updateChosenItemsArray(itemId)
    }

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.weapon.name}<FaTrash className="quantity-pill delete-icon" onClick={() => this.handleDelete(this.props.weapon.id)} /><Badge className="quantity-pill" pill>{this.props.weapon.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default WeaponContainer