// import { ADD_TO_CART } from '../actions/cartActions'
import { ADD_TO_CART } from '../type'



const initialState = {
    item_id:null,
    quantity:null,
}

export function addtocartReducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return {
                item_id:action.payload, 
                quantity:action.payload, 
            }
        default:
            return state
    }

}