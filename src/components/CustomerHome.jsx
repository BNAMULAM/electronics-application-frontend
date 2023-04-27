import React,{useEffect, useState} from "react";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import AddProductType from "./AddProductType";
import ViewProductType from "./ViewProductType";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductTypes, getProductType, deleteProductType, updateProductType} from "./../actions/productTypeActions"
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import {updateProduct,getProduct,deleteProduct,getAllProducts} from "../actions/productAction";
import {getBasket} from "./../actions/basketAction";
import ViewBasket from "./ViewBasket";
import {getCustomer} from "./../actions/customerAction";
import ViewOrder from "./ViewOrder";
import  { useNavigate } from 'react-router-dom'

const CustomerHome = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [viewProductsFlag, setViewProductsFlag] = useState(false);
    const [productData, setProductData] = useState([]);
    const [showAddProductModal, setAddShowProductModal] = useState(false);
    const getAllProductSelector = useSelector((state)=>state.getAllProducts.getAllProductsResp)
    
    const [bucketData, setBucketData] = useState([]);
    const [viewBucketFlag, setViewBucketFlag] = useState(false);
    const getBucketSelector = useSelector((state)=>state.getBasket.getBasketResp)

    
    const [orderData, setOrderData] = useState([]);
    const [viewOrderFlag, setViewOrderFlag] = useState(false);

    const getCustomerSelector = useSelector((state)=>state.getCustomerByUserName.getCustomerResp)
    const loginResp =  useSelector((state)=>state.login.loginResp)
    useEffect(()=>{
        console.log(loginResp)
        if(!loginResp || loginResp==""){
            navigate("/")
        }
    })
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/Customer-home">ProductTypeSelection <a href="/staffHome"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link onClick={()=>{
                            setViewBucketFlag(false)
                            setViewOrderFlag(false)
                            setViewProductsFlag([])
                            dispatch(getAllProducts())
                            dispatch(getCustomer(getCustomerSelector.customerId))
                            setProductData(getAllProductSelector)
                            setViewProductsFlag(!viewProductsFlag)
                        }}>View Products</Nav.Link>

                        <Nav.Link onClick={()=>{
                            setViewProductsFlag(false)
                            setViewOrderFlag(false)
                            setBucketData([])
                            dispatch(getBasket(getCustomerSelector.basket.basketId))
                            dispatch(getCustomer(getCustomerSelector.customerId))
                            setBucketData(getBucketSelector)
                            setViewBucketFlag(!viewBucketFlag)
                        }}>View Bucket Items</Nav.Link>

                        <Nav.Link onClick={()=>{
                            setViewProductsFlag(false)
                            setViewBucketFlag(false)
                            setOrderData([])
                            dispatch(getCustomer(getCustomerSelector.customerId))
                            setOrderData(getCustomerSelector.orders)
                            setViewOrderFlag(!viewOrderFlag)
                        }}>View Orders</Nav.Link>

                        <Nav.Link href="/" style={{ paddingLeft: '380px' }}>Logout</Nav.Link>  
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                viewProductsFlag?
                <ViewProduct user="Customer" data={productData} />:
                null
            }
            {
                viewBucketFlag?
                <ViewBasket user="Customer" data={bucketData} />:
                null
            }
            {
                viewOrderFlag?
                <ViewOrder user="Customer" data={orderData} />:
                null
            }
        </>
    )
}

export default CustomerHome;