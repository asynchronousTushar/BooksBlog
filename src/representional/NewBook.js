import React, { Component, createRef } from 'react';


class NewBook extends Component {
    constructor() {
        super()
        this.state = {
            bookName: "",
            writerName: "",
            description: ""
        }
        //Uncontrolled form
        this.bookName = createRef();
        this.writerName = createRef();
        this.description = createRef();

    }

    onSubmitHandeler = event => {
        console.log(this.state);
        console.log(this.bookName.current.value);
        console.log(this.writerName.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    onChangeHandeler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

    }

    render() {

        return (
            <div className="NewBook" >
                <form onSubmit={this.onSubmitHandeler.bind(this)}>
                    <label>Book Name: <input type="text" name="bookName" value={this.state.bookName} onChange={event => this.onChangeHandeler(event)} ref={this.bookName} /></label>

                    <label>writer Name: <input type="text" name="writerName" value={this.state.writerName} onChange={event => this.onChangeHandeler(event)} ref={this.writerName} /></label>
                    <label>Description: </label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={event => this.onChangeHandeler(event)} ref={this.description} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export default NewBook;