import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import bookImg from './book.jpeg';

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
        {this.state.books.length > 0 ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item className='h-100'
                key={idx}>
                <img
                  src={bookImg}
                />
                <Carousel.Caption>
                  <h1>{book.title}</h1>
                  <h2>{book.description}</h2>
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
