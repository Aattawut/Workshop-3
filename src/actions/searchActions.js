import { GET_SEARCH, GET_SEARCH_ERROR } from "../type";



export function getSearchName(searchnav)  {
    return ({
        type: GET_SEARCH,
        payload: searchnav,
      });
   
}
