import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'


class MiscContainer extends Component {

    handleDelete = (itemId) => {

        this.props.packItems.find((packItems)=> {
            if (packItems.itemId === itemId) {
                this.props.deleteJoin(packItems.id)
            }
        })
        this.props.deleteItem(itemId)
        .then(() => {
            this.props.updateState(this.props.chosenItems)
        })
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