import { put, call } from 'redux-saga/effects'
import { GET_INVOICE_REQ, GET_INVOICE_ITEM, GET_INVOICE_ITEM_ERROR} from '../type'

import axios from 'axios'

export function* sagagetInvoiceitem({token, invoice_id})  {
 
    try{
        const res = yield call(fetchInvoiceitem, {token, invoice_id})
            
        yield put({
            type: GET_INVOICE_ITEM,
            invoice_id:invoice_id,
            payload: res.data.data.invoice_item

        })
        // yield put({
        //     type:GET_CART_REQ
        // })
        }
    catch(e){
        yield put( {
            type: GET_INVOICE_ITEM_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchInvoiceitem({ token, invoice_id }) {
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.get(`http://127.0.0.1:8000/invoice/${invoice_id}/`, config)
    return response;
}