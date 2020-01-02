import { connect } from 'react-redux';
import React       from 'react';

@connect(state => {
    return state;
}, dispatch => {
    return {
        changeFistKey() {
            dispatch({
                type              : 'CHANGE_FIRST_KEY',
                valueNewOfFirstKey: 'bar class',
            });
        },
    };
})
 class MainComponent extends React.Component {
    render() {
        const { changeFistKey } = this.props;
        return (
            <div onClick={() => changeFistKey()}>
                CHANGE_FIRST_KEY class reactJS
            </div>
        );
    }
}
export default MainComponent;
