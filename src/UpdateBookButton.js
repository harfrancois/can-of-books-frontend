import React from 'react';
import { Button } from 'react-bootstrap';
import UpdateBookFormModal from './UpdateBookFormModal.js';

class UpdateBookButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    console.log('UpdateBookButton state: ', this.state);
    return (
      <>
        {
          // need conditional to render add book modal
          this.state.show ? (
            <UpdateBookFormModal
              user={this.props.user}
              updateBook={this.props.updateBook}
              show={this.state.show}
              close={this.handleClose}
              book={this.props.book}
            />
          ) : (
            <Button variant="primary" onClick={this.handleShow}>
              Update Book
            </Button>
          )
        }
      </>
    );
  }
}
export default UpdateBookButton;
