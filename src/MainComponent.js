import { connect }              from 'react-redux';
import React                    from 'react';
import { ChangerValueFirstKey } from './actions';


@connect(state => {
    return state;
}, dispatch => {
    return {
        changeFistKey(state) {
            dispatch({
                type: ChangerValueFirstKey,
                ...state,
            });
        },
    };
})
class MainComponent extends React.Component {
    render() {
        const { changeFistKey } = this.props;
        return (
            <div onClick={() => changeFistKey({
                valueNewOfFirstKey: 'bar class'
            })}>
                CHANGE_FIRST_KEY class reactJS
            </div>
        );
    }
}

export default MainComponent;
