import React from 'react';
import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  getBooks = async () => {
    try {
      // remember we can grab with a  parameter as well 
      // let results = await axios(`${SERVER}/cats?location=Bremerton`);
      let email = `reymercado.usa@gmail.com`;
      let results = await axios(`${SERVER}/books?email=${email}`);
      this.setState({
        books: results.data
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }
  componentDidMount(){
    this.getBooks();
  }

  render() {

    /* TODO: render user's books in a Carousel */
    let books = this.state.books.map((book, idx) => (
      <p key={idx+book.title} >{book.title} is {book.email}</p>
    ))
    console.log(books);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <p>{books}</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
