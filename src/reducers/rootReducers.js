import {combineReducers} from "redux";
// import {cartReducer} from "./cartReducer";
import {categoryReducer} from "./categoryReducer";
import {userReducer} from './usersReducer'
import {authReducer} from "./authReducer";
import {statusReducer} from "./statusReducer"
import {cartapiReducer} from "./cartapiReducer"
import { EditcartReducer } from "./editcartReducer";
import {getinvoiceReducer} from './getInvoiceReducer'
import {getinvoiceitemReducer} from './getinvoiceitemReducer'
import {submitvoidReducer} from './submitvoidReducer'
import {categorynameReducer} from './getCategorynameReducer'
import {searchReducer} from './searchReducer'
// import {addtocartReducer} from "./addtocartReducer"
// import {deletecartReducer} from "./deletecartReducer"

export default combineReducers ({
    // cart:cartReducer,
    category:categoryReducer,
    users: userReducer,
    auth: authReducer,
    status: statusReducer,
    get_cart:cartapiReducer,
    // add_cart:addtocartReducer,
    cart_id:EditcartReducer,
    get_invoice:getinvoiceReducer,
    get_invoice_item:getinvoiceitemReducer,
    void_id:submitvoidReducer,
    categ_name:categorynameReducer,
    search_text:searchReducer,
    // get_invoice_item:getinvoiceitemReducer,
    // quantity:EditcartReducer,

    
})