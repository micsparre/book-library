import React from 'react';

export class BookForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.open) {return null;}
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    Title: 
                    <input name="title" type="text"  />
                </label>
                <label>
                    Author: 
                    <input name="author" type="text"  />
                </label>
                <label>
                    Pages read: 
                    <input name="pages" type="number"  />
                </label>
                <label>
                    Finished? 
                    <input name="finished" type="checkbox"  />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
    
}