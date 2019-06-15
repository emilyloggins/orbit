import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PackEditModal extends Component {
  render () {
    return (
      <Modal isOpen={ this.props.toggleModal } toggle={ this.props.handleClickNo }>
        <ModalHeader>
          { this.props.header }
        </ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button outline color="primary" onClick={ this.props.handleClickYes }>Yes</Button>
          <Button outline color="danger" onClick={ this.props.handleClickNo }>No</Button>
        </ModalFooter>
      </Modal>
    );
  }
}