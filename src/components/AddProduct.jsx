import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {ProductAddAction} from "../actions/productAction";
import { Navbar,Container,Nav  } from 'react-bootstrap';

const AddProduct = (props) =>{
     
    const dispatch = useDispatch();

    const handleAddproduct = (obj) =>{
        // if(!(obj.productCode && obj.details && obj.productType && obj.productValue && obj.date) || obj.productType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.productValue = parseInt(obj.productValue)
        // if(obj.productValue<=0){
        //     alert("product value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(ProductAddAction(obj));

        console.log(obj)
        props.onHide()
    }
    

    const addproductObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Product Name"
                        onChange={(e)=>{addproductObj.productName=(e.target.value)}}
                    /><br />
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Product Price"
                        onChange={(e)=>{
                            addproductObj.productPrice=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>create Date</Form.Label>
                    <Form.Control
                        type="date"
                        onChange={(e)=>{
                            addproductObj.createDate=(e.target.value);
                        }}
                    /><br />
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="Image"
                        onChange={(e)=>{addproductObj.image=(e.target.value)}}
                    /><br />
                    <Form.Label>Product Id</Form.Label>
                    <Form.Control
                        type="Number"
                        placeholder="Product ID"
                        onChange={(e)=>{
                            addproductObj.productTypeId=(e.target.value);
                        }}
                    /><br />
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddproduct(addproductObj);}}>
                Add Product
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddProduct;