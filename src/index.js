import React                            from 'react';
import ReactDOM                         from 'react-dom';
import './index.css';
import App                              from './App';
import * as serviceWorker               from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider }                     from 'react-redux';


const fistMiddleware = store => next => action => {
    switch (action.type) {

        default: return next(action);
    }
};
const secondMiddleware = store => next => action => {
    switch (action.type) {

        default: return next(action);
    }
};


const firstReducer = (state = { firstKey: 'foo'} ,action )  => {
    switch (action.type) {
        case 'CHANGE_FIRST_KEY':
            return {
                ...state,
                firstKey: action.valueNewOfFirstKey
            };
        default: return state;
    }
};

const store = createStore(firstReducer, applyMiddleware(fistMiddleware, secondMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
