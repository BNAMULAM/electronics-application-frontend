import axios from 'axios';
import API from '../constants/api.json';

export const CustomerAddAction = (obj)=> async dispatch=> {
  axios
    .post(API.addCustomer,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_CUSTOMER",
        payload:res
      })
      alert("Prodct Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add customer");
    });
};

export const getAllCustomers = ()=> async dispatch=> {
  await axios
    .get(API.viewAllCustomer)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_CUSTOMERS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_CUSTOMERS_ERR",
      payload:err.response
    })
  });  
};

export const getCustomer = (id)=> async dispatch=> { 
  await axios
    .get(API.getCustomerByUserId+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_CUSTOMERS_BY_USERNAME",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_CUSTOMERS_ERR",
      payload:err.response
    })
  });  
};


export const deleteCustomer = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteCustomer+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_CUSTOMER",
        payload:resp.data
      })
      alert("Customer deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Customer not deleted")
    });  
  };

  export const updateCustomer = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateCustomer+`?id=${obj.customerId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_CUSTOMER",
        payload:resp.data
      })
      alert("Customer update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_CUSTOMER_ERR",
        payload:err.response
      })
      alert("Customer couldn't update")
    });  
  };
  

  
export const getCustomerByUserName = (id)=> async dispatch=> { 
    await axios
      .get(API.getCustomerByUserName+`?userName=${id}`)
    .then((resp)=>{
      dispatch({
        type:"GET_CUSTOMERS_BY_USERNAME",
        payload:resp.data
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_CUSTOMERS_BY_USERNAME_ERR",
        payload:err.response
      })
    });  
  };

  
export const addOrderToCustomer = (custId,orderId)=> async dispatch=> {
  axios
    .put(API.addCustOrder+`?customerId=${custId}&orderId=${orderId}`)
    .then((res)=>{
      dispatch({
        type:"ADD_CUST_ORDER",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_CUST_ORDER_ERR",
        payload:err.response
      })
    });
};
