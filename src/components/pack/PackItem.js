import React, { Component } from 'react'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap'
import { withRouter } from 'react-router-dom'
import './Pack.css'


class PackList extends Component {
    state = {

    }
    render() {
        return (
            <div className="pack-item-div">
                <Card>
                    <CardHeader className="pack-title-header" tag="h3">{this.props.name}</CardHeader>
                    <CardBody>
                        <CardText>{this.props.description}</CardText>
                        <Button size="lg" className="main-btn">View Items</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default withRouter(PackList)