
export const addProduct =  (state={
    addProductResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_PRODUCT":
          return ({
            addProductResp: action.payload
          });
        case "ADD_PRODUCT_ERR":
          return({
            addProductResp:action.payload
          })
          case "RESET":
          return({
            addProductResp:""
          })
        default:
          return state;
      }
  };

  export const getAllProducts =  (
    state={
        getAllProductsResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_PRODUCTS":
            return({
                getAllProductsResp:action.payload
            })
          case "GET_ALL_PRODUCTS_ERR":
          return({
            getAllProductsResp:action.payload
          })
          case "RESET":
          return({
            getAllProductsResp:""
          })
          default:
            return state;
        }
  };

  
  export const getProduct =  (
    state={
        getProductResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_PRODUCTS":
            return({
                getProductResp:action.payload
            })
          case "GET_PRODUCTS_ERR":
          return({
            getProductResp:action.payload
          })
          case "RESET":
          return({
            getProductResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteProduct =  (
    state={
        deleteProductResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_PRODUCT":
            return({
                deleteProductResp:action.payload
            })
          case "DELETE_PRODUCT_ERR":
          return({
            deleteProductResp:action.payload
          })
          case "RESET":
          return({
            deleteProductResp:""
          })
          default:
            return state;
        }
  };

  export const updateProduct =  (
    state={
        updateProductResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_PRODUCT":
            return({
                updateProductResp:action.payload
            })
          case "UPDATE_PRODUCT_ERR":
          return({
            updateProductResp:action.payload
          })
          case "RESET":
          return({
            updateProductResp:""
          })
          default:
            return state;
        }
  };