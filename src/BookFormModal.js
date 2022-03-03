import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class BookFormModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      email: this.props.user.email, //parent is addabookbutton
      description: e.target.description.value,
      status: e.target.status.value
    };
    console.log('New book: ', newBook);
    this.props.handleBookSubmit(newBook);
    this.props.close();
  };

  render() {
    return (
      <>
        <Modal onHide={this.props.close} show={this.props.show} >
          <Modal.Header closeButton >
            <Modal.Title> Add a Book </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title" >
                <Form.Label>Book Title: </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description: </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId='status'>
                <Form.Check value='true' type="checkbox" label="Read" />
              </Form.Group>
              <Button variant="primary" type="submit ">
                Add Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer> </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
