import React,{useEffect, useState} from "react";
import { Navbar,Container,Nav  } from 'react-bootstrap';
import AddProductType from "./AddProductType";
import ViewProductType from "./ViewProductType";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductTypes, getProductType, deleteProductType, updateProductType} from "./../actions/productTypeActions"
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import  { useNavigate } from 'react-router-dom'
import {updateProduct,getProduct,deleteProduct,getAllProducts} from "../actions/productAction";
const AdminHome = () =>{

    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [viewProductTypesFlag, setViewProductTypesFlag] = useState(false);
    const [productTypeData, setProductTypeData] = useState([]);
    const [showAddProductTypeModal, setAddShowProductTypeModal] = useState(false);
    const getAllProductTypeSelector = useSelector((state)=>state.getAllProductTypes.getAllProductTypesResp)
    
    const [viewProductsFlag, setViewProductsFlag] = useState(false);
    const [productData, setProductData] = useState([]);
    const [showAddProductModal, setAddShowProductModal] = useState(false);
    const getAllProductSelector = useSelector((state)=>state.getAllProducts.getAllProductsResp)
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
                    <Navbar.Brand href="/admin-home">ProductTypeSelection <a href="/staffHome"></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link onClick={()=>{setAddShowProductTypeModal(true)}}>Add ProductType</Nav.Link>
                        <Nav.Link onClick={()=>{
                            setViewProductsFlag(false)
                            setProductTypeData([])
                            dispatch(getAllProductTypes())
                            setProductTypeData(getAllProductTypeSelector)
                            setViewProductTypesFlag(!viewProductTypesFlag)
                        }}>View ProductType</Nav.Link>

                        <Nav.Link onClick={()=>{setAddShowProductModal(true)}}>Add Product</Nav.Link>
                        <Nav.Link onClick={()=>{
                            setViewProductTypesFlag(false)
                            setViewProductsFlag([])
                            dispatch(getAllProducts())
                            setProductData(getAllProductSelector)
                            setViewProductsFlag(!viewProductsFlag)
                        }}>View Product</Nav.Link>

                        <Nav.Link href="/" style={{ paddingLeft: '380px' }}>Logout</Nav.Link>  
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <AddProductType 
                show={showAddProductTypeModal}
                onHide={()=>{setAddShowProductTypeModal(false)}}
            />
            {
                viewProductTypesFlag?
                <ViewProductType data = {productTypeData}/>:
                null
            }
            <AddProduct
                show={showAddProductModal}
                onHide={()=>{setAddShowProductModal(false)}}
            />
            {
                viewProductsFlag?
                <ViewProduct user="Admin" data={productData} />:
                null
            }
        </>
    )
}

export default AdminHome;