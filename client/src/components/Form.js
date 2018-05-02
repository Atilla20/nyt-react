import React, { Component } from "react";

class Form extends Component {
    render() {
        return(
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"> Search</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="topic"> Topic</label>
                                <input onChange={this.props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="start-year"> Start Year</label>
                                <input onChange={this.props.handleStartYearChange} type="text" className="form-control" id="startYear" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end-year"> End Year</label>
                                <input onChange={this.props.handleEndYearChange} type="text" className="form-control" id="endYear" />
                            </div>
                            <button onClick={this.props.handleFormSubmit} type="submit" className="btn btn-primary"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <br/><br/>

        <div className="row">
            <div className="col-lg-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title"> Results</h3>
                    </div>
                    <div className="panel-body">
                       {this.props.renderArticles()}
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
}
}

export default Form;