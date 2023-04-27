import axios from 'axios';
import API from '../constants/api.json';

export const registerAdmin = (obj)=> async dispatch=> {
    axios
      .post(API.adminRegister,obj)
      .then((res)=>{
        dispatch({
          type:"REGISTER_ADMIN",
          payload:res
        })
        alert("Registered please login")
      })
      .catch((err)=>{
        dispatch({
          type:"REGISTER_ADMIN_ERR",
          payload:err.response
        })
        alert("Registration failed");
      });
  };

  export const registerCustomer = (obj)=> async dispatch=> {
    axios
      .post(API.customerRegister,obj)
      .then((res)=>{
        dispatch({
          type:"REGISTER_CUSTOMER",
          payload:res
        })
        alert("Registered please login")
      })
      .catch((err)=>{
        dispatch({
          type:"REGISTER_CUSTOMER_ERR",
          payload:err.response
        })
        alert("Registration failed");
      });
  };

  export const login = (userName,pass)=> async dispatch=> {
    axios
      .get(API.login+`?userName=${userName}&password=${pass}`)
      .then((res)=>{
        dispatch({
          type:"LOGIN",
          payload:res
        })
      })
      .catch((err)=>{
        dispatch({
          type:"LOGIN_ERR",
          payload:err.response
        })
        alert("Login failed");
      });
  };