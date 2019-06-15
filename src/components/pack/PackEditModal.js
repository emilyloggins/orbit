import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PackManager from '../../modules/PackManager'

export default class PackEditModal extends Component {
    state = {
        name: '',
        purpose: ''
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        PackManager.getPack(this.props.chosenPack).then(pack => {
          this.setState({
            name: pack.name,
            purpose: pack.purpose,
          });
        });
      }

    handleSave = () => {
        const newPack = {
            name: this.state.name,
            purpose: this.state.purpose
        }
        this.props.editPack(newPack)
    }


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
                            <Input type="text" name="name" id="name" placeholder="" onChange={this.handleFieldChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="purpose">Purpose</Label>
                            <Input type="text" name="purpose" id="purpose" placeholder="" onChange={this.handleFieldChange} />
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