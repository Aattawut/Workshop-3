// import { ADD_TO_CART } from '../actions/cartActions'
import { EDIT_CART } from '../type'


const initialState = {
    cart_id:null,
    quantity:null,
}

export function EditcartReducer(state = initialState, action){
    switch (action.type){
        case EDIT_CART:
            return {
                cart_id:action.payload, 
                quantity:action.payload, 
            }
        default:
            return state
    }

}