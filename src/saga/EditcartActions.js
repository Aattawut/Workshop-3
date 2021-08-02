import { put, call } from 'redux-saga/effects'
import { EDIT_CART, EDIT_CART_REQ, EDIT_CART_ERROR, GET_CART_REQ } from '../type'

import axios from 'axios'

export function* sagaEditCart({token, cart_id, quantity})  {
 
    try{
        const res = yield call(patchEditCart,{ token, cart_id, quantity})

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
            type: EDIT_CART_ERROR,
            payload: console.log(e),
        })
    }
}

async function patchEditCart({ token, cart_id, quantity}) {
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.patch(`http://127.0.0.1:8000/cart/${cart_id}/`, {   
        quantity:quantity, 
    }, config)
    return response;
}