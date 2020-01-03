import { ChangerValueFirstKey } from './classTypeActions';

export const changeFistKey = (dispatch) => valueOfFirstKey => {
    dispatch({
            type: ChangerValueFirstKey,
            valueOfFirstKey: valueOfFirstKey
        })
};


