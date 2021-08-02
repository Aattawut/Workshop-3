import { startFetch, endFetch, errorFetch } from '../actions/statusActions'
import {SET_AUTH} from '../type'
import {SET_TOKEN} from '../type'
import { GET_CART_REQ} from '../type'

import {signin} from '../data/users'
import axios from 'axios'

// import Login from '../components/accounts/login'
export function setAuth(user,is_login) {
    return {
        type: SET_AUTH,
        payload: user,
        is_login: is_login,
     
        
        
    }
}
// export function setToken(token) {
//     return {
//         type: SET_TOKEN,
//         token: token
        
//     }
// }

export function fetchAuthAsync(username, password, user) {
    
    return async function(dispatch) {

            

            dispatch(startFetch())
            axios.post('http://127.0.0.1:8000/token/',{
                username: username,
                password: password,

            })

            
       
            .then((response) => {
                console.log("User", response);
                dispatch(setAuth(response.data,true))
                dispatch({ type: GET_CART_REQ, token: user });
                // dispatch(setToken(response.data))
                dispatch(errorFetch(''))
                dispatch(endFetch())
                return true

            })
            .catch((error) => {
                dispatch(setAuth(null,false))
                dispatch(errorFetch(error))
                dispatch(endFetch())
                return false
            })     
            
            
        }
    }
