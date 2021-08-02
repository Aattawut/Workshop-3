// import { ADD_TO_CART } from '../actions/cartActions'
import { GET_INVOICE_ITEM } from '../type'



const initialState = {
    invoice_id:null,
    get_item:[],
}

export function getinvoiceitemReducer(state = initialState, action){
    switch (action.type){
        case GET_INVOICE_ITEM:
            return {
                invoice_id:action.invoice_id, 
                get_item:action.payload, 
            }
        default:
            return state
    }

}