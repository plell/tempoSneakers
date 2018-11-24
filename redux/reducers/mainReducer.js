import * as types from "../actions/types";

const initialState = {
    cards:"hey",
    hand:"HHIIII"
};

export default function mainReducer(state = initialState, action) {
    switch(action.type) {

        case types.SET_HAND:
            console.log("SET_HAND",d)
            return {
                ...state,
                hand:action.data
            };

        case types.SET_CARDS:
            console.log("SET_CARDS")
            
            return {
                ...state,
                cards:action.data
            };

        default:
            return state;
    }
}
