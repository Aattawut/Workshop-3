import { put, call } from 'redux-saga/effects'
import {GET_CART, GET_CART_ERROR, GET_CART_REQ} from '../type'

import axios from 'axios'

export function* sagagetCart({token})  {
 
    try{
        const res = yield call(fetchCart, {token})
            
        yield put({
            type: GET_CART,
            payload: res.data

        })
        // yield put({
        //     type:GET_CART_REQ
        // })
        }
    catch(e){
        yield put( {
            type: GET_CART_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchCart({ token }) {
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.get('http://127.0.0.1:8000/cart/', config)
    return response;
}