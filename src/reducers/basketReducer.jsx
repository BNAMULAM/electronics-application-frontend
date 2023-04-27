
export const addBasket =  (state={
    addBasketResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_BASKET":
          return ({
            addBasketResp: action.payload
          });
        case "ADD_BASKET_ERR":
          return({
            addBasketResp:action.payload
          })
          case "RESET":
          return({
            addBasketResp:""
          })
        default:
          return state;
      }
  };

  export const getAllBaskets =  (
    state={
        getAllBasketsResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_BASKETS":
            return({
                getAllBasketsResp:action.payload
            })
          case "GET_ALL_BASKETS_ERR":
          return({
            getAllBasketsResp:action.payload
          })
          case "RESET":
          return({
            getAllBasketsResp:""
          })
          default:
            return state;
        }
  };

  
  export const getBasket =  (
    state={
        getBasketResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_BASKETS":
            return({
                getBasketResp:action.payload
            })
          case "GET_BASKETS_ERR":
          return({
            getBasketResp:action.payload
          })
          case "RESET":
          return({
            getBasketResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteBasket =  (
    state={
        deleteBasketResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_BASKET":
            return({
                deleteBasketResp:action.payload
            })
          case "DELETE_BASKET_ERR":
          return({
            deleteBasketResp:action.payload
          })
          case "RESET":
          return({
            deleteBasketResp:""
          })
          default:
            return state;
        }
  };

  export const updateBasket =  (
    state={
        updateBasketResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_BASKET":
            return({
                updateBasketResp:action.payload
            })
          case "UPDATE_BASKET_ERR":
          return({
            updateBasketResp:action.payload
          })
          case "RESET":
          return({
            updateBasketResp:""
          })
          default:
            return state;
        }
  };