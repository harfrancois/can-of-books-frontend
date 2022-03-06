import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class UpdateBookFormModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value || this.props.book.title,
      email: this.props.user.email, //parent is addabookbutton
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    };
    console.log('updatedbook: ', newBook);
    this.props.updateBook(newBook);
    this.props.close();
  };

  render() {
    console.log('updateModal', this.props);
    return (
      <>
        <Modal onHide={this.props.close} show={this.props.show} >
          <Modal.Header closeButton >
            <Modal.Title> Update A Book </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title" >
                <Form.Label>Book Title: </Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title}/>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" placeholder={this.props.book.description}/>
              </Form.Group>
              <Form.Group controlId='status'>
                <Form.Check value='true' type="checkbox" label="Read" />
              </Form.Group>
              <Button variant="primary" type="submit ">
                Update Book
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateBookFormModal;
