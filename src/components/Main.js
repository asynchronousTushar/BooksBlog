import React, { Component } from 'react';
import Book from './Book';
import bookList from '../assets/bookList';
import NewBook from '../representional/NewBook';
import BookPage from '../representional/BookPage';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Main extends Component {
    state = {
        book: bookList,
        selectedBook: null
    }

    selectedBookHandeler = bookId => {
        const book = this.state.book.filter(book => {
            return book.id === bookId
        })[0];

        this.setState({
            selectedBook: book
        })
    }



    render() {
        const books = this.state.book.map(book => {
            return (
                <Book book={book} key={book.id} selectedBookHandeler={() => this.selectedBookHandeler(book.id)} />
            );
        });

        const allbooks = <div>{books}</div>;

        return (
            <div className="App">
                <nav className="Navbar">
                    <NavLink to="/" exact>
                    <span style={{color: "lightcyan", fontFamily: "cursive", fontWeight: "bold", float: "left", marginLeft: "40px"}}>Books Blog</span>
                    </NavLink>
                    <ul>
                        <li><NavLink to="/" exact >Home</NavLink></li>
                        <li><NavLink to="/new" exact >New Book</NavLink></li>
                    </ul>
                </nav>
                <br />
                <Switch>
                    <Route path="/books" exact render={() => allbooks} />
                    <Route path="/new" exact component={NewBook} />
                    <Route path="/books/:id" exact render={() => <BookPage book={this.state.selectedBook} />} />
                    <Redirect from="/" to="/books" />
                </Switch>
            </div>

        );
    }
}


export default Main;