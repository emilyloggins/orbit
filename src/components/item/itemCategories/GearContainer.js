import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class GearContainer extends Component {

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.gear.name}<Badge className="quantity-pill" pill>{this.props.gear.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default GearContainer