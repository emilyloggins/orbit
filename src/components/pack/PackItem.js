import React, { Component } from 'react'
import {
    Card, Button, CardHeader, CardBody, CardText
} from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import PackItemManager from "../../modules/PackItemManager"
import './Pack.css'

class PackItem extends Component {

    handleDelete = (packId) => {
        this.props.deletePack(packId)
    }

    handleItemClick = (id) => {
        this.props.changeChosenPack(id)
        this.props.history.push("/items")
    }

    render() {

        return (
            <div className="pack-item-div" >
                <Card>
                    <CardHeader className="pack-title-header1" tag="h3">
                        <div className="pack-title-header2">
                            <h3 className="pack-title-text">{this.props.name}</h3>
                        </div>
                        <div className="pack-icons-div">
                            <FaTrash className="pack-icon" onClick={() => this.handleDelete(this.props.item.id)} />
                            <FaEdit className="pack-icon" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardText>{this.props.description}</CardText>
                        <Button onClick={() => this.handleItemClick(this.props.item)} size="lg" className="main-btn">View Items</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default withRouter(PackItem)
