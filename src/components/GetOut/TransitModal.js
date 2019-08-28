import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './GetOut.css'
import { FaExclamationTriangle } from 'react-icons/fa'

export default class TransitModal extends Component {
    render() {
        return (
            <Modal className="getout-modal" isOpen={this.props.toggleModal} toggle={this.props.handleClickNo}>
                <ModalHeader>
                    <FaExclamationTriangle className="warning"/>{this.props.header}
                </ModalHeader>
                <ModalBody>
                    <h3>Station ID: {this.props.station.id}</h3>
                    <h3>{this.props.station.street}</h3>
                    <h3>{this.props.station.postal}</h3>
                    <h4>You are <strong>{this.props.station.distance}</strong> meters away.</h4>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="danger" onClick={this.props.handleClickNo}>Done</Button>
                </ModalFooter>
            </Modal>
        );
    }
}