import React from 'react';
import { BookForm } from "./components/BookForm";

export class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        
        this.Book = this.Book.bind(this);
    }

    Book = (title, author, pages, finished) => ({
        title : title,
        author : author,
        pages : pages,
        finished : finished
        // this.info = () => {
        //     return `${title} by ${author}, ${pages} pages, ${read ? "has been read" : "not read yet"}`;
        // }
    });

    myLibrary = [];

    addBook = function addBookToLibrary() {
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert('A book was submitted: ' + this.state.title);
        console.log("Handle submit")

        let propNames = ["title", "author", "pages", "finished"];
        let propFields = ["value", "value", "value", "checked"];

        let bookArgs = propNames.map((p, i) => event.target[p][propFields[i]]);
        let bookObj = this.Book(...bookArgs);
        this.myLibrary.push(bookObj);
        console.log(this.myLibrary);
        // document.querySelector('form').reset();
        document.getElementById("addBookBtn").style.display = "inline";
        this.setState({open: false});
        return false;
    }

    render() {
        const openForm = () => {
            this.setState({open: !this.state.open});
            document.getElementById("addBookBtn").style.display = "none";
        }
        return(
            <div>
                <button id="addBookBtn" onClick={openForm}>
                    Add Book
                </button>
                <BookForm open={this.state.open} onSubmit={this.handleSubmit} />
            </div>
        )
    }

}