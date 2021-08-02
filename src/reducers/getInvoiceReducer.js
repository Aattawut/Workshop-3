// import { ADD_TO_CART } from '../actions/cartActions'
import { GET_INVOICE } from '../type'



const initialState = {
    get_invoice:[],
}

export function getinvoiceReducer(state = initialState, action){
    switch (action.type){
        case GET_INVOICE:
            return {
                get_invoice:action.payload, 
            }
        default:
            return state
    }

}