
export const addCustomer =  (state={
    addCustomerResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_CUSTOMER":
          return ({
            addCustomerResp: action.payload
          });
        case "ADD_CUSTOMER_ERR":
          return({
            addCustomerResp:action.payload
          })
          case "RESET":
          return({
            addCustomerResp:""
          })
        default:
          return state;
      }
  };

  
export const addCustOrder =  (state={
    addOrderResp:""
  }, action) => {
      switch (action.type) {
        case "ADD_CUST_ORDER":
          return ({
            addOrderResp: action.payload
          });
        case "ADD_CUST_ORDER_ERR":
          return({
            addOrderResp:action.payload
          })
          case "RESET":
          return({
            addOrderResp:""
          })
        default:
          return state;
      }
  };

  export const getAllCustomers =  (
    state={
        getAllCustomersResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_ALL_CUSTOMERS":
            return({
                getAllCustomersResp:action.payload
            })
          case "GET_ALL_CUSTOMERS_ERR":
          return({
            getAllCustomersResp:action.payload
          })
          case "RESET":
          return({
            getAllCustomersResp:""
          })
          default:
            return state;
        }
  };

  
  export const getCustomer =  (
    state={
        getCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_CUSTOMERS":
            return({
                getCustomerResp:action.payload
            })
          case "GET_CUSTOMERS_ERR":
          return({
            getCustomerResp:action.payload
          })
          case "RESET":
          return({
            getCustomerResp:""
          })
          default:
            return state;
        }
  };

  
  export const deleteCustomer =  (
    state={
        deleteCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "DELETE_CUSTOMER":
            return({
                deleteCustomerResp:action.payload
            })
          case "DELETE_CUSTOMER_ERR":
          return({
            deleteCustomerResp:action.payload
          })
          case "RESET":
          return({
            deleteCustomerResp:""
          })
          default:
            return state;
        }
  };

  export const updateCustomer =  (
    state={
        updateCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "UPDATE_CUSTOMER":
            return({
                updateCustomerResp:action.payload
            })
          case "UPDATE_CUSTOMER_ERR":
          return({
            updateCustomerResp:action.payload
          })
          case "RESET":
          return({
            updateCustomerResp:""
          })
          default:
            return state;
        }
  };

  
  export const getCustomerByUserName =  (
    state={
        getCustomerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "GET_CUSTOMERS_BY_USERNAME":
            return({
                getCustomerResp:action.payload
            })
          case "GET_CUSTOMERS_BY_USERNAME_ERR":
          return({
            getCustomerResp:action.payload
          })
          case "RESET":
          return({
            getCustomerResp:""
          })
          default:
            return state;
        }
  };