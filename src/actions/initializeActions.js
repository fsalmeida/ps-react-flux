"use strict";

let Dispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let AuthorApi = require('../api/authorApi');

let InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                authors: AuthorApi.getAllAuthors()
            }
        });
    }
};

module.exports = InitializeActions;