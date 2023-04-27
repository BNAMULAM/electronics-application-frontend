
export const addProductType =  (state={
    addProductTypeResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_PRODUCT_TYPE":
          return ({
            addProductTypeResp: action.payload
          });
        case "ADD_PRODUCT_TYPE_ERR":
          return({
            addProductTypeResp:action.payload
          })
          case "RESET":
          return({
            addProductTypeResp:""
          })
        default:
          return state;
      }
  };

  export const getAllProductTypes =  (
    state={
        getAllProductTypesResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_PRODUCT_TYPES":
            return({
                getAllProductTypesResp:action.payload
            })
          case "GET_ALL_PRODUCT_TYPES_ERR":
          return({
            getAllProductTypesResp:action.payload
          })
          case "RESET":
          return({
            getAllProductTypesResp:""
          })
          default:
            return state;
        }
  };

  
  export const getProductType =  (
    state={
        getProductTypeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_PRODUCT_TYPES":
            return({
                getProductTypeResp:action.payload
            })
          case "GET_PRODUCT_TYPES_ERR":
          return({
            getProductTypeResp:action.payload
          })
          case "RESET":
          return({
            getProductTypeResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteProductType =  (
    state={
        deleteProductTypeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_PRODUCT_TYPE":
            return({
                deleteProductTypeResp:action.payload
            })
          case "DELETE_PRODUCT_TYPE_ERR":
          return({
            deleteProductTypeResp:action.payload
          })
          case "RESET":
          return({
            deleteProductTypeResp:""
          })
          default:
            return state;
        }
  };

  export const updateProductType =  (
    state={
        updateProductTypeResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_PRODUCT_TYPE":
            return({
                updateProductTypeResp:action.payload
            })
          case "UPDATE_PRODUCT_TYPE_ERR":
          return({
            updateProductTypeResp:action.payload
          })
          case "RESET":
          return({
            updateProductTypeResp:""
          })
          default:
            return state;
        }
  };