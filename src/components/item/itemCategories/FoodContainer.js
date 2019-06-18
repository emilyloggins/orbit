import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FaTrash } from 'react-icons/fa'

class FoodContainer extends Component {

    handleDelete = (itemId) => {
        // console.log("delete!")
        this.props.deleteItem(itemId)
        // this.props.deleteJoin(packItemId)
        this.props.changeChosenPack(this.props.chosenPack)
        this.props.getJoinTableItems(this.props.chosenPack)
    }
    
    render() {

        const currentPackId = this.props.packItems.map((item) => {
            if (item.packId === this.props.chosenPack && item.itemId === this.props.food.id) {
                return item.id
            }
        })
        // console.log("current pack Id", currentPackId)

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