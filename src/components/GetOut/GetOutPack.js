import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardText } from 'reactstrap';
import { FaSuitcase } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';


class GetOutPack extends Component {
    render() {
        return (
            <div className="card-body-container">
                <Card>
                    <CardBody className="card-body">
                        <CardTitle className="header-card">I AM</CardTitle>
                        <Button size="lg" classname="getout-btn">SAFE</Button>
                        <Button size="lg" classname="getout-btn">UNSAFE</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default GetOutPack;