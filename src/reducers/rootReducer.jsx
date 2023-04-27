import { combineReducers } from "redux";
import {updateProductType,addProductType,getAllProductTypes,getProductType,deleteProductType} from "./productTypeReducer"
import {updateProduct,addProduct,getAllProducts,getProduct,deleteProduct} from "./productReducer"
import {registerAdmin, registerCustomer, login} from "./loginReducer"
import {addCustomer, getAllCustomers, getCustomer, deleteCustomer, updateCustomer, getCustomerByUserName,addCustOrder} from "./customerReducer"
import {addBasket,getAllBaskets, getBasket, deleteBasket, updateBasket  } from "./basketReducer";
import {addOrder,getAllOrders,getOrder,deleteOrder,updateOrder} from "./orderReducer"

const rootReducer = combineReducers({
    updateProductType,addProductType,getAllProductTypes,getProductType,deleteProductType,
    updateProduct,addProduct,getAllProducts,getProduct,deleteProduct,
    registerAdmin, registerCustomer, login,
    addCustomer, getAllCustomers, getCustomer, deleteCustomer, updateCustomer, getCustomerByUserName,addCustOrder,
    addBasket,getAllBaskets, getBasket, deleteBasket, updateBasket,
    addOrder,getAllOrders,getOrder,deleteOrder,updateOrder
});

export default rootReducer;