import axios from 'axios';
import API from '../constants/api.json';

export const basketAddAction = (obj)=> async dispatch=> {
  axios
    .post(API.addBasket,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_BASKET",
        payload:res
      })
      alert("Prodct Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_BASKET_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add basket");
    });
};

export const getAllBaskets = ()=> async dispatch=> {
  await axios
    .get(API.viewAllBasket)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_BASKETS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_BASKETS_ERR",
      payload:err.response
    })
  });  
};

export const getBasket = (id)=> async dispatch=> { 
  await axios
    .get(API.viewBasketById+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_BASKETS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_BASKETS_ERR",
      payload:err.response
    })
  });  
};


export const deleteBasket = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteBasket+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_BASKET",
        payload:resp.data
      })
      alert("Basket deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_BASKET_ERR",
        payload:err.response
      })
      alert("Basket not deleted")
    });  
  };

  export const updateBasket = (id,obj)=> async dispatch=> { 
    await axios
      .put(API.updateBasket+`?id=${id}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_BASKET",
        payload:resp.data
      })
      alert("Basket update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_BASKET_ERR",
        payload:err.response
      })
      alert("Basket couldn't update")
    });  
  };
