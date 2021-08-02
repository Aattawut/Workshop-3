import { GET_CATEGORY, GET_CATEGORY_ERROR } from "../type";

// export const getCategName = (categ_name) => async (dispatch) => {
//   dispatch({
//     type: GET_CATEGORY,
//     payload: categ_name,
//   });
// };

export function getCategoryName(categ_name)  {
    return ({
        type: GET_CATEGORY,
        payload: categ_name,
      });
   
}
