import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import bookImg from './book.jpeg';
import AddBookButton from './AddBookButton.js';
import DeleteButton from './DeleteButton.js';
import UpdateBookButton from './UpdateBookButton';

let SERVER = process.env.REACT_APP_SERVER;

console.log('hello world');

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  getBooks = async () => {
    try {
      // remember we can grab with a  parameter as well
      // let url = `${SERVER}/books?email=${this.props.user.email}`;

      let results = await axios.get(`${SERVER}/books?email=${this.props.user.email}`);
      this.setState({
        books: results.data
      });
      // console.log('proof of life');
    } catch (error) {
      console.log('we have an error: ', error.message);
    }
  };

  postBook = async (newBook) => {
    try {
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      });
    } catch (error) {
      console.log(' There is an error: ', error.message);
    }
  }
  deleteBook = async (id) => {
    try {
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url);
      const updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log('There is an error:', error.message);
    }
  }

  updateBook = async (book) => {
    try {
      let url = `${SERVER}/books/${book._id}`;
      let updatedBook = await axios.put(url, book);
      console.log(updatedBook);
      this.getBooks();
      // const updatedBooks = this.state.books.filter(book => book._id !== id);
      // this.setState({
      //   books: updatedBooks
      // });
    } catch (error) {
      console.log('There is an error:', error.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log('BestBook state', this.state);
    /* TODO: render user's books in a Carousel */
    // let books = this.state.books.map((book, idx) => (
    //   <p key={idx + book.title} >{book.title} is {book.email}</p>
    // ));

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddBookButton
          user={this.props.user}
          handleBookSubmit={this.postBook}
        />
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item className='h-100'
                key={idx}>
                <img
                  className="d-block w-100 h-50"
                  src={bookImg}
                  alt={book.name}
                />
                <Carousel.Caption>
                  <h1>{book.title}</h1>
                  <h3>{book.description}</h3>
                  <DeleteButton
                    book_id={book._id}
                    deleteBook={this.deleteBook}/>
                  <UpdateBookButton
                    book={book}
                    updateBook={this.updateBook}
                    user={this.props.user}
                  />
                </Carousel.Caption>
              </Carousel.Item>))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
