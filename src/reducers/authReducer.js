import {SET_AUTH} from '../type'

const initialState = {
    user: null,
    islogin:false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                user:action.payload,
                islogin:action.is_login,
            }

        default:
            return state
    }
}