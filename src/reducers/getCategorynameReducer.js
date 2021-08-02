import {GET_CATEGORY} from '../type'

const initialState = {
    category_name:"ทุกหมวดหมู่"
}

export function categorynameReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                category_name:action.payload,
            }

        default:
            return state
    }
}