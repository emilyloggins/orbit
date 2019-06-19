import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'

class GearContainer extends Component {

    handleDelete = (itemId) => {
        // console.log("delete!")
        this.props.deleteItem(itemId)
    }

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.gear.name}<FaTrash className="quantity-pill delete-icon" onClick={() => this.handleDelete(this.props.gear.id)} /><Badge className="quantity-pill" pill>{this.props.gear.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default GearContainer