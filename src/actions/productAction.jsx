import axios from 'axios';
import API from '../constants/api.json';

export const ProductAddAction = (obj)=> async dispatch=> {
  axios
    .post(API.addProduct,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_PRODUCT",
        payload:res
      })
      alert("Prodct Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_PRODUCT_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add product");
    });
};

export const getAllProducts = ()=> async dispatch=> {
  await axios
    .get(API.viewAllProduct)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_PRODUCTS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_PRODUCTS_ERR",
      payload:err.response
    })
  });  
};

export const getProduct = (id)=> async dispatch=> { 
  await axios
    .get(API.viewProduct+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_PRODUCTS",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_PRODUCTS_ERR",
      payload:err.response
    })
  });  
};


export const deleteProduct = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteProduct+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_PRODUCT",
        payload:resp.data
      })
      alert("Product deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_PRODUCT_ERR",
        payload:err.response
      })
      alert("Product not deleted")
    });  
  };

  export const updateProduct = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateProduct+`?id=${obj.productId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_PRODUCT",
        payload:resp.data
      })
      alert("Product update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_PRODUCT_ERR",
        payload:err.response
      })
      alert("Product couldn't update")
    });  
  };


