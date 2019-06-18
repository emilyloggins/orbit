import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class FoodContainer extends Component {

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.food.name}<Badge className="quantity-pill" pill>{this.props.food.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default FoodContainer