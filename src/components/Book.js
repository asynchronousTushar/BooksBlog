import React, { Component } from 'react';
import '../styleshits/Book.css';
import { withRouter, Link } from 'react-router-dom';

const Book = props => {

    return (

        <div className="Book">
            <h2 onClick={props.selectedBookHandeler} >
                <Link to={"/books/" + props.book.id}  >
                    {props.book.bookName}
                </Link>
            </h2>
            <h4> {props.book.writer}</h4>
        </div>
    );
}

export default withRouter(Book);