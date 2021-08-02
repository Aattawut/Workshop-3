// import { ADD_TO_CART } from '../actions/cartActions'
import { GET_CART } from '../type'



const initialState = {
    get_cart:[],
}

export function cartapiReducer(state = initialState, action){
    switch (action.type){
        case GET_CART:
            return {
                get_cart:action.payload, 
            }
        default:
            return state
    }

}