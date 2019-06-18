import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class WeaponContainer extends Component {

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.weapon.name}<Badge className="quantity-pill" pill>{this.props.weapon.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default WeaponContainer