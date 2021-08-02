import {GET_SEARCH} from '../type'

const initialState = {
    searchnav:""
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SEARCH:
            return {
                searchnav:action.payload,
            }

        default:
            return state
    }
}