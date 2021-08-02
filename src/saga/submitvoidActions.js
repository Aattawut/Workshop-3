import { put, call } from 'redux-saga/effects'
import {GET_INVOICE_REQ,SUBMIT_VOID_ERROR,SUBMIT_VOID_REQ,SUBMIT_VOID } from '../type'

import axios from 'axios'

export function* sagaSubmitVoid({token, invoice_id_void})  {
 
    try{
        const res = yield call(fetchSubmitVoid,{ token, invoice_id_void})

            
       
          yield put({
            type:GET_INVOICE_REQ,
            token:token,
        })
          yield put({
            type:SUBMIT_VOID,
            invoice_id_void:invoice_id_void,
        })
        }
    catch(e){
        yield put( {
            type: SUBMIT_VOID_ERROR,
            payload: console.log(e),
        })
    }
}

async function fetchSubmitVoid({ token, invoice_id_void}) {

  const data = {

  }
 
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    };

    let response =  await axios.post(`http://127.0.0.1:8000/invoice/${invoice_id_void}/void/`,data , config)
    return response;
}