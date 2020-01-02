import React                            from 'react';
import ReactDOM                         from 'react-dom';
import './index.css';
import App                              from './App';
import * as serviceWorker               from './serviceWorker';
import { applyMiddleware, createStore } from 'redux';
import { Provider }                     from 'react-redux';
import container                        from './Container';
import { ChangerValueFirstKey }         from './actions';


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

const middlewareActionContainer = store => next => action => {
    const actionContainer = container.make(action.type);
    actionContainer.run(action).then(res => {
        return next({
            ...actionContainer,
            ...action,
            response: res
        })
    }).catch(error => {
        return next({
            ...actionContainer,
            ...action,
            response: error
        })

    })


};


const firstReducer = (state = { firstKey: 'foo'} ,action )  => {
    switch (action.type) {
        case 'CHANGE_FIRST_KEY':
            return {
                ...state,
                firstKey: action.valueNewOfFirstKey
            };
        case ChangerValueFirstKey:
            return {
                ...state,
                firstKey: action.response
            };
        default: return state;
    }
};





const store = createStore(firstReducer, applyMiddleware(fistMiddleware, secondMiddleware, middlewareActionContainer));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
