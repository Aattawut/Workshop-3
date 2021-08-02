import {all} from 'redux-saga/effects'
import {watch_cart, watch_delete_cart, watch_add_to_cart, watch_edit_cart,watch_get_invoice_list, watch_get_invoice_item, watch_checkout,watch_submitvoid } from '../saga'



export default function* rootSaga() {
    yield all([
        watch_cart(),
        watch_delete_cart(),
        watch_add_to_cart(),
        watch_edit_cart(),
        watch_get_invoice_list(),
        watch_get_invoice_item(),
        watch_checkout(),
        watch_submitvoid(),



    ])
}
