import { put, call } from 'redux-saga/effects'
import {GET_CART, GET_CART_ERROR, GET_CART_REQ, GET_INVOICE_REQ, GET_INVOICE, GET_INVOICE_ERROR} from '../type'

import axios from 'axios'

export function* sagagetInvoice({token})  {
 
    try{
        const res = yield call(fetchInvoice, {token})
            
        yield put({
            type: GET_INVOICE,
            payload: res.data

        })
        // yield put({
        //     type:GET_CART_REQ
        // })
        }
    catch(e){
        yield put( {
            type: GET_INVOICE_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchInvoice({ token }) {
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.get('http://127.0.0.1:8000/invoice/', config)
    return response;
}