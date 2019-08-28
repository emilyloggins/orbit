import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PackEditModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.toggleModal} toggle={this.props.handleClickNo}>
                <ModalHeader>
                    {this.props.header}
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder={this.props.name} onChange={this.props.handleFieldChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="purpose">Purpose</Label>
                            <Input type="text" name="purpose" id="purpose" placeholder={this.props.description} onChange={this.props.handleFieldChange} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button outline color="primary" onClick={this.props.handleSave}>Save</Button>
                    <Button outline color="danger" onClick={this.props.handleClickNo}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}