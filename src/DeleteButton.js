import React from 'react';
import Button from 'react-bootstrap/Button';

class DeleteButton extends React.Component{

  render() {
    return(
      <>
        <Button onClick={() => this.props.deleteBook(this.props.book_id)}>Delete Book</Button>
      </>
    );
  }
}

export default DeleteButton;
