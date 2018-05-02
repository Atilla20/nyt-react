import React from "react";

const Results = props =>
    
            <div className="container">
            <li className ="list-group-item">
                <h4> {this.props.title}</h4>
                <span className="btn-group pull-right">
                <a href={this.props.url} target="_blank">
                <button className="btn btn-default ">View Article</button>
                </a>
               <button className="btn btn-primary" onClick = {() => this.props.handleSaveButton(this.props._id)}>Save</button>
                </span>
     
                <p>Date Published: {this.props.date}</p>
            </li>
            </div>



export default Results;