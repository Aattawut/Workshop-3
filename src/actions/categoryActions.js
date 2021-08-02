import { GET_CATEGORY_NAVBAR, GET_CATEGORY_NAVBAR_ERROR } from '../type'


import axios from 'axios'


export const getCategories = () => async dispatch => {
    try{
        console.log('test actions')
        const res = await axios.get(`http://127.0.0.1:8000/category/`)
        // console.log('redux'+res)
        dispatch({
            type: GET_CATEGORY_NAVBAR,
            // payload: res.data.data.results
            payload: res.data
            
        })
    }
    catch(e){
        dispatch( {
            type: GET_CATEGORY_NAVBAR_ERROR,
            payload: console.log(e),
        })
    }

}