import * as types from './types';

export const update = (data) => {
    return dispatch({ 
    	type: types.SET_HAND, 
    	data })
}