import { put, call } from 'redux-saga/effects'
import {DELETE_CART_ERROR, GET_CART, GET_CART_ERROR, GET_CART_REQ, GET_INVOICE_REQ ,CHECKOUT_ERROR} from '../type'

import axios from 'axios'

export function* sagaCheckout({token})  {
 
    try{
        const res = yield call(fetchCheckout,{ token})

            
        yield put({
            type:GET_CART_REQ,
            token:token,
        })
        yield put({
            type:GET_INVOICE_REQ,
            token:token,
        })
    }
        
    catch(e){
        yield put( {
            type: CHECKOUT_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchCheckout({ token }) {
    console.log('1111'+(token.access))
    const data = {
        
    }
 
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      
      }
    };

    let response =  await axios.post(`http://127.0.0.1:8000/checkout/`,data, config)
    return response;
}