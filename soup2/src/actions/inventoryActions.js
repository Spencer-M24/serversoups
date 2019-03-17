import axios from 'axios';

export const FETCHING_INV = "FETCHING_INV";
export const FETCH_INV_SUCCESS = "FETCH_INV_SUCCESS";
export const FETCH_INV_FAILURE = "FETCH_INV_FAILURE";
export const FETCHING_INV_ITEM = "FETCHING_INV_ITEM";
export const FETCH_INV_ITEM_SUCCESS = "FETCH_INV_ITEM_SUCCESS";
export const FETCH_INV_ITEM_FAILURE = "FETCH_INV_ITEM_FAILURE";
export const POSTING_INV = "POSTING_INV";
export const POST_INV_SUCCESS = "POST_INV_SUCCESS";
export const POST_INV_FAILURE = "POST_INV_FAILURE";
export const DELETING_INV = "DELETING_INV";
export const DELETE_INV_SUCCESS = "DELETE_INV_SUCCESS";
export const DELETE_INV_FAILURE = "DELETE_INV_FAILURE";
export const UPDATING_INV = "UPDATING_INV";
export const UPDATE_INV_SUCCESS = "UPDATE_INV_SUCCESS";
export const UPDATE_INV_FAILURE = "UPDATE_FAILURE";

export const recInvent = (userId) => dispatch => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
  dispatch({type: FETCHING_INV});
  
  axios.get(`https://soup-server.herokuapp.com/users/${userId}/inventory`)
  .then (response => dispatch ({type:FETCH_INV_SUCCESS, payload: response.data}))
  
  .catch 
  
  (err => dispatch ({ type: FETCH_INV_FAILURE, payload: err }))
  

  }
export const grabitem = (userId) => {
    const promise = axios.get(`https://soup-server.herokuapp.com/users/${userId}/inventory`); 
    return dispatch=>{
      dispatch({type: FETCHING_INV_ITEM});
      promise
        .then(response=>{
          dispatch({type:FETCH_INV_ITEM_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_INV_ITEM_FAILURE})})


    }
}
export const addInv = (userId, newItem) => {
    const promise = axios.post(`https://soup-server.herokuapp.com/users/${userId}/inventory`, newItem);
    return dispatch=>{
      dispatch({type:POSTING_INV});
      promise
        .then(response=>{
          dispatch({type: POST_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: POST_INV_FAILURE})
        })
    };
}
 
export const deleteInv = (userId, invId) => {
    const promise = axios.delete(`https://soup-server.herokuapp.com/users/${userId}/inventory/${invId}`)
    return dispatch=>{

      dispatch({type: DELETING_INV})
      promise
        .then(response=>{
          dispatch({type: DELETE_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: DELETE_INV_FAILURE})
        })
    }
}
export const updateInv = (userId, invId, item) => {
    const promise = axios.put(`https://soup-server.herokuapp.com/users/${userId}/inventory/${invId}`,item)
    return dispatch =>{
      dispatch({type: UPDATING_INV})
      promise
        .then(response =>{
          dispatch({type: UPDATE_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: UPDATE_INV_FAILURE, error: "Error"})
        })
     }
}
