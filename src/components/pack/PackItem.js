import React, { Component } from 'react'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import './Pack.css'

class PackItem extends Component {

    // handleDelete() {
    //     this.props.packs.map((join) => {
    //         this.props.packItems.filter((item) => {
    //             if (join.packId === item.id) {
    //                 let selectedPackId = item.id
    //                 this.props.deleteJoin(selectedPackId)
    //             }
    //         })
    //     })
    // }

    handleItemClick = () => {
        this.props.history.push("/items")
    }

    render() {
        console.log("join", this.props.packItems)
        console.log("item", this.props.item)
        return (
            <div className="pack-item-div">
                <Card>
                    <CardHeader className="pack-title-header1" tag="h3" value={this.props.item.id}>
                        <div className="pack-title-header2">
                            <h3 className="pack-title-text">{this.props.name}</h3>
                        </div>
                        <div className="pack-icons-div">
                            <FaTrash className="pack-icon" onClick={this.handleDelete} />
                            <FaEdit className="pack-icon" />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <CardText>{this.props.description}</CardText>
                        <Button size="lg" className="main-btn">View Items</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}


export default withRouter(PackItem)