import axios from 'axios';
import API from '../constants/api.json';

export const ProductTypeAddAction = (obj)=> async dispatch=> {
  axios
    .post(API.addProductType,obj)
    .then((res)=>{
      dispatch({
        type:"ADD_PRODUCT_TYPE",
        payload:res
      })
      alert("Prodct Type Added")
    })
    .catch((err)=>{
      dispatch({
        type:"ADD_PRODUCT_TYPE_ERR",
        payload:err.response
      })
      alert("Someting went wrong could't Add productType");
    });
};

export const getAllProductTypes = ()=> async dispatch=> {
  await axios
    .get(API.viewAllProductType)
  .then((resp)=>{
    dispatch({
      type:"GET_ALL_PRODUCT_TYPES",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_ALL_PRODUCT_TYPES_ERR",
      payload:err.response
    })
  });  
};

export const getProductType = (id)=> async dispatch=> { 
  await axios
    .get(API.viewProductType+`?id=${id}`)
  .then((resp)=>{
    dispatch({
      type:"GET_PRODUCT_TYPES",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"GET_PRODUCT_TYPES_ERR",
      payload:err.response
    })
  });  
};


export const deleteProductType = (id)=> async dispatch=> { 
    await axios
      .delete(API.deleteProductType+`?id=${id}`)
    .then((resp)=>{
      dispatch({
        type:"DELETE_PRODUCT_TYPE",
        payload:resp.data
      })
      alert("ProductType deleted")
    })
    .catch((err)=>{
      dispatch({
        type:"DELETE_PRODUCT_TYPE_ERR",
        payload:err.response
      })
      alert("ProductType not deleted")
    });  
  };

  export const updateProductType = (obj)=> async dispatch=> { 
    await axios
      .put(API.updateProductType+`?id=${obj.productTypeId}`,obj)
    .then((resp)=>{
      dispatch({
        type:"UPDATE_PRODUCT_TYPE",
        payload:resp.data
      })
      alert("ProductType update")
    })
    .catch((err)=>{
      dispatch({
        type:"UPDATE_PRODUCT_TYPE_ERR",
        payload:err.response
      })
      alert("ProductType couldn't update")
    });  
  };
