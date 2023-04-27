import axios from 'axios';
import API from '../constants/api.json';

export const addOrderaction = (obj)=> async dispatch=> {
  axios
    .post(API.addOrder,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_ORDER",
        payload:res
      })
      alert("Order Placed")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_ORDER_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add order");
    });
};

export const getAllOrders = ()=> async dispatch=> {
  await axios
    .get(API.viewAllOrder)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_ORDERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_ORDERS_ERR",
      payload:err.response
    })
  });  
};

export const getOrder = (id)=> async dispatch=> { 
  await axios
    .get(API.viewOrder+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_ORDERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ORDERS_ERR",
      payload:err.response
    })
  });  
};


export const deleteOrder = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteOrder+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_ORDER",
        payload:resp.data
      })
      alert("Order deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_ORDER_ERR",
        payload:err.response
      })
      alert("Order not deleted")
    });  
  };

  export const updateOrder = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateOrder+`?id=${obj.orderId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_ORDER",
        payload:resp.data
      })
      alert("Order update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_ORDER_ERR",
        payload:err.response
      })
      alert("Order couldn't update")
    });  
  };


