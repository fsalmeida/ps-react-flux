"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes/*, Router.HistoryLocatio*/, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
})