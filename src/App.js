import React         from 'react';
import logo          from './logo.svg';
import './App.css';
import { connect }   from 'react-redux';
import MainComponent from './MainComponent';



function App(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <MainComponent/>
                <p>{props.firstKey}</p>
                <p onClick={() => props.changeFistKey()}>
                    CHANGE_FIRST_KEY hook () =>
                </p>
            </header>
        </div>
    );
}

export default connect((state) => {
    return state;
}, (dispatch) => {
    return {
        changeFistKey() {
            dispatch({
                type              : 'CHANGE_FIRST_KEY',
                valueNewOfFirstKey: 'bar hook',
            });
        },
    };
})(App);
