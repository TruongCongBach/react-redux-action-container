import { connect }       from 'react-redux';
import React             from 'react';
import { changeFistKey } from './actions';

@connect(state => {
    return state;
}, dispatch => {
    return {
        changeFistKey: (valueNewOfFirstKey) => changeFistKey(dispatch)(valueNewOfFirstKey)
    };
})
class MainComponent extends React.Component {
    render() {
        const { changeFistKey } = this.props;
        return (
            <div onClick={() => changeFistKey('bar class')}>
                CHANGE_FIRST_KEY class reactJS
            </div>
        );
    }
}

export default MainComponent;
