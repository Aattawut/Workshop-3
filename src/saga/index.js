import {takeEvery} from 'redux-saga/effects'
import { GET_CART_REQ, DELETE_CART_REQ, ADD_TO_CART_REQ, EDIT_CART_REQ, GET_INVOICE_REQ, GET_INVOICE_ITEM_REQ, CHECKOUT_REQ, SUBMIT_VOID, SUBMIT_VOID_REQ} from '../type'
import { sagagetCart } from '../saga/Cartactions'
import { sagaDeleteCart } from '../saga/DeletecartActions'
import { sagaAddtoCart } from '../saga/AddtoCartActions'
import { sagaEditCart } from '../saga/EditcartActions'
import { sagagetInvoice} from '../saga/GetinvoiceActions'
import { sagagetInvoiceitem} from '../saga/getinvoiceitemAction'
import { sagaCheckout } from '../saga/checkoutActions'
import { sagaSubmitVoid } from '../saga/submitvoidActions'


export function* watch_cart() {
    yield takeEvery(GET_CART_REQ, sagagetCart)
}

export function* watch_delete_cart() {
    yield takeEvery(DELETE_CART_REQ, sagaDeleteCart)
}

export function* watch_add_to_cart() {
    yield takeEvery(ADD_TO_CART_REQ, sagaAddtoCart)
}

export function* watch_edit_cart() {
    yield takeEvery(EDIT_CART_REQ, sagaEditCart)
}

export function* watch_get_invoice_list() {
    yield takeEvery(GET_INVOICE_REQ, sagagetInvoice)
}

export function* watch_get_invoice_item() {
    yield takeEvery(GET_INVOICE_ITEM_REQ, sagagetInvoiceitem)
}

export function* watch_checkout() {
    yield takeEvery(CHECKOUT_REQ, sagaCheckout)
}

export function* watch_submitvoid() {
    yield takeEvery(SUBMIT_VOID_REQ, sagaSubmitVoid)
}

