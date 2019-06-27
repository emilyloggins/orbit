import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'
import ItemManager from '../../../modules/ItemManager'

class MiscContainer extends Component {

    handleDelete = (itemId) => {
        ItemManager.deleteItem(itemId)
        .then(this.props.getJoinTableItems(this.props.chosenPack))
    }

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.misc.name}<FaTrash className="quantity-pill delete-icon" onClick={() => this.handleDelete(this.props.misc.id)} /><Badge className="quantity-pill" pill>{this.props.misc.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default MiscContainer