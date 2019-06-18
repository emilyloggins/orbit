import React, { Component } from 'react'
import '../Item.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';


class MiscContainer extends Component {

    render() {
        return (
            <div className="category-item-container">
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{this.props.misc.name}<Badge className="quantity-pill" pill>{this.props.misc.quantity}</Badge></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default MiscContainer