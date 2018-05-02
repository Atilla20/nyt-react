import React, { Component } from 'react';

class Searched extends Component {
    render() {
        return(

            <div className="container">
            <li className ="list-group-item">
                <h4> {this.props.title}</h4>
                <span className="btn-group pull-right">
                <a href={this.props.url} target="_blank">
                    <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.props.handleDeleteButton(this.props._id)}>Delete</button>
                </span>
            <p>Date Published: {this.props.date}</p>
            </li>
            </div>
        );
}
}


export default Searched;