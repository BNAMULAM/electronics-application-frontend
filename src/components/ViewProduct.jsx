import React, { useEffect, useState } from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {updateProduct,getProduct,deleteProduct,getAllProducts} from "../actions/productAction";
import {updateBasket,getBasket} from "./../actions/basketAction";
import {getCustomer} from "./../actions/customerAction";

const ViewProduct = ({user,data})=>{
    const getProductsSelector = useSelector((state)=>state.getProduct.getProductResp);
    const dispatch = useDispatch();
    const [editProductData,setEditProductDta] = useState('');
    const [showEditProductModal,setShowEditProductModal] = useState(false);
    const [placeOrdereId,setPlaceOrdereId] = useState('');
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);
    const [alreadyInBasket,setAlreadyInBasket] = useState([]);
    
    const getCustomerSelector = useSelector((state)=>state.getCustomerByUserName.getCustomerResp)

    useEffect(()=>{
        if(getCustomerSelector){        
            const productIds = []
            for(const product in getCustomerSelector.basket.products){
                productIds.push(getCustomerSelector.basket.products[product].productId)
            }
            setAlreadyInBasket(productIds);
        }
    },[getCustomerSelector])

    const deleteProducts = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.productName}`)) {
            dispatch(deleteProduct(val.productId))
            dispatch(getAllProducts());
            
      }  
    }
    const EditProduct = (props)=>{
       const val = props.data;
       if(!val) return
       val.productTypeId = val && val.producttype && val.producttype.productTypeId
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={val? val.productName : null}
                            onChange={(e)=>{val.productName=(e.target.value)}}
                        /><br />
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val? val.productPrice : null}
                            onChange={(e)=>{val.productPrice=(e.target.value)}}
                        /><br />
                        <Form.Label>Product Type Id</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val && val.producttype ? val.producttype.productTypeId : null}
                            onChange={(e)=>{val.productTypeId=(e.target.value)}}
                        /><br />
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={val? val.image : null}
                            onChange={(e)=>{val.image=(e.target.value)}}
                        /><br />
                        <Form.Label>Created Date</Form.Label>
                        <Form.Control
                            type="Date"
                            placeholder={val? val.createDate : null}
                            onChange={(e)=>{val.createDate=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{
                    if(val.amount<=0) {alert("amount cannot be less than 0"); return}
                    dispatch(updateProduct(val))
                    setShowEditProductModal(false)
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleAddBasket = (val)=>{
        const productIds = [val.productId]
        for(const product in getCustomerSelector.basket.products){
            productIds.push(getCustomerSelector.basket.products[product].productId)
        }
        const obj = {
            productCount: getCustomerSelector.basket.productCount+1,
            total:val.productPrice+getCustomerSelector.basket.total,
            productIds: productIds
        }
        dispatch(updateBasket(getCustomerSelector.basket.basketId,obj))
        dispatch(getCustomer(getCustomerSelector.customerId))
    }

    return(
        <>
        <EditProduct 
            data={editProductData}
            show={showEditProductModal}
            onHide={()=>{setShowEditProductModal(false)}}
        />
            <div style = {{paddingLeft:"300px",paddingTop:"20px"}}>
                
                {
                    data&& data.map((val)=>{
                        return(
                            <div style = {{display:"flex",paddingTop:"20px"}}>
                                <div style={{
                                    width:"350px",
                                    height:"300px",
                                    display:"inline"
                                    }}>
                                    <img
                                    style={{width:"300px",height:"300px"}}
                                    src={val.image}
                                    />
                                </div>
                                <div 
                                    style={{paddingRight:"150px",paddingTop:"50px"}}
                                >
                                    <h3>Name: {val.productName}</h3>
                                    <h4>Price: {val.productPrice}</h4>
                                    <h4>Created Date: {val.createDate}</h4>
                                    <h4>Type: {val.producttype && val.producttype.productTypeName }</h4>
                                    {
                                        user=="Admin"?
                                        <>
                                            <button onClick={()=>{
                                                setEditProductDta(val);
                                                setShowEditProductModal(true);
                                            }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                            <button onClick={()=>deleteProducts(val)}>Delete</button>
                                        </>:
                                        <button onClick={()=>{
                                            handleAddBasket(val)
                                        }} disabled = {alreadyInBasket.includes(val.productId)}>Add To bucket</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </> 
    )
}

export default ViewProduct