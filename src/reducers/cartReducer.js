// // import { ADD_TO_CART } from '../actions/cartActions'
// import { ADD_TO_CART } from '../type'
// import { DELETE_CART } from '../type'



// const initialState = []

// export function cartReducer(state = initialState, action){
//     // if (action.type === ADD_TO_CART)
//     switch (action.type){
//         case ADD_TO_CART:

//             // const updatedState = [...state.cart, action.payload]
//             let updatedCart
//             const foundItem = state.find(item => item.id === action.payload.id)

//             if (!foundItem){
//                 updatedCart = [...state, action.payload]
//             }else{
//                 updatedCart = state.map(item => ({
//                     ...item,
//                     quantity: item.id === foundItem.id ? item.quantity + 1 : item.quantity
//                 }))
//             }

//             return updatedCart
            
//         case DELETE_CART:
//             return state.filter(item => item.id !== action.payload)
            
//         default:
//             return state
//     }

// }