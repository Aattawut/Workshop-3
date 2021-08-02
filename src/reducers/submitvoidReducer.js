// import { ADD_TO_CART } from '../actions/cartActions'
import { SUBMIT_VOID } from '../type'



const initialState = {
    invoice_id_void:null,

}

export function submitvoidReducer(state = initialState, action){
    switch (action.type){
        case SUBMIT_VOID:
            return {
                invoice_id_void:action.invoice_id_void, 
     
            }
        default:
            return state
    }

}