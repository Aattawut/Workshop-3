import { put, call } from 'redux-saga/effects'
import {DELETE_CART_ERROR, GET_CART, GET_CART_ERROR, GET_CART_REQ } from '../type'

import axios from 'axios'

export function* sagaDeleteCart({token, cart_item})  {
 
    try{
        const res = yield call(fetchDeleteCart,{ token, cart_item})

            
        yield put({
            type:GET_CART_REQ,
            token:token,
        })
        }
    catch(e){
        yield put( {
            type: DELETE_CART_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchDeleteCart({ token, cart_item}) {
 
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.delete(`http://127.0.0.1:8000/cart/${cart_item}/`, config)
    return response;
}