export const registerAdmin =  (state={
    registerAdminResp:""
  }, action) => {
      switch (action.type) {
        case "REGISTER_ADMIN":
          return ({
            registerAdminResp: action.payload
          });
        case "REGISTER_ADMIN_ERR":
          return({
            registerAdminResp:action.payload
          })
          case "RESET":
          return({
            registerAdminResp:""
          })
        default:
          return state;
      }
  };

  export const registerCustomer =  (state={
    registerCustomerResp:""
  }, action) => {
      switch (action.type) {
        case "REGISTER_CUSTOMER":
          return ({
            registerCustomerResp: action.payload
          });
        case "REGISTER_CUSTOMER_ERR":
          return({
            registerCustomerResp:action.payload
          })
          case "RESET":
          return({
            registerCustomerResp:""
          })
        default:
          return state;
      }
  };

  export const login =  (state={
    loginResp:""
  }, action) => {
      switch (action.type) {
        case "LOGIN":
          return ({
            loginResp: action.payload
          });
        case "LOGIN_ERR":
          return({
            loginResp:action.payload
          })
          case "RESET":
          return({
            loginResp:""
          })
        default:
          return state;
      }
  };