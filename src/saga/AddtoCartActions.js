import { put, call } from 'redux-saga/effects'
import {ADD_TO_CART, ADD_TO_CART_REQ, ADD_TO_CART_ERROR, GET_CART_REQ } from '../type'

import axios from 'axios'

export function* sagaAddtoCart({token, item_id, quantity})  {
 
    try{
        const res = yield call(postAddToCart,{ token, item_id, quantity})

        // yield put({
        //     type:ADD_TO_CART_REQ,
        //     token:token,
        // })

            
        yield put({
            type:GET_CART_REQ,
            token:token,
        })
        }
    catch(e){
        yield put( {
            type: ADD_TO_CART_ERROR,
            payload: console.log(e),
        })
    }
}

async function postAddToCart({ token, item_id, quantity}) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.post('http://127.0.0.1:8000/cart/', {   
        cart_product:item_id,
        quantity:quantity,
       
    }, config)
    return response;
}