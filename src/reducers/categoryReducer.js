import { GET_CATEGORY_NAVBAR } from '../type'


const initialState = {
    category: [],
    loading:true
}

export function categoryReducer(state = initialState, action){

    switch(action.type){

        case GET_CATEGORY_NAVBAR:
        return {
            category:action.payload,
            loading:false

        }
        default: return state
    }

}

// export function categoryReducer(state = initialState, action){
//     switch (action.type){
//         case GET_CATEGORY_NAVBAR:

//             const updatedState = [...state.category, action.payload]

//             return{
//                 ...state,
//                 // category: updatedState,
//                 category:action.payload,
//                 loading:false
//             }
//         default:
//             return state
//     }

// }