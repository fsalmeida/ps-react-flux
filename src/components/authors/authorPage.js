"use strict";

let React = require('react');
let Router = require('react-router');
let Link = Router.Link;
let AuthorActions = require('../../actions/authorActions');
let AuthorStore = require('../../stores/authorStore');
let AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;