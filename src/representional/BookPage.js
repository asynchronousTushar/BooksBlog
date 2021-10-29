import React from 'react';


const BookPage = props => {

    if (props.book != null) {

        return (
            <div>
                <h2>{props.book.bookName} </h2>
                <p style={{ fontSize: "16px", fontWeight: "400", width: "700px", margin: "auto" }}>{props.book.description}</p>
            </div>
        )

    } else return <div></div>
}

export default BookPage;