import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'
import ItemManager from '../../../modules/ItemManager'

class FoodContainer extends Component {

    handleDelete = (itemId) => {
        ItemManager.deleteItem(itemId)
        .then(this.props.getJoinTableItems(this.props.chosenPack))
    }
    // handleDelete = (itemId) => {
    //     this.props.packItems.find((packItems) => {
    //         if (packItems.itemId === itemId) {
    //             this.props.deleteJoin(packItems.id)
    //         }
    //         this.props.getJoinTableItems(this.props.chosenPack)
    //     })
    // }

    render() {

        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.food.name}<FaTrash className="quantity-pill delete-icon" onClick={() => this.handleDelete(this.props.food.id)} /><Badge className="quantity-pill" pill>{this.props.food.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default FoodContainer