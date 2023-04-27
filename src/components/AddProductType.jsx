import React,{useState,useEffect} from "react"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {ProductTypeAddAction} from "../actions/productTypeActions";

const AddProductType = (props) =>{
     
    const dispatch = useDispatch();

    const handleAddproductType = (obj) =>{
        // if(!(obj.productTypeCode && obj.details && obj.productTypeType && obj.productTypeValue && obj.date) || obj.productTypeType=="false" ){
        //     alert("all fields are mandatory");
        //     return;
        // }
        // obj.productTypeValue = parseInt(obj.productTypeValue)
        // if(obj.productTypeValue<=0){
        //     alert("productType value cannot be less than or equal to 0");
        //     return;
        // }

        dispatch(ProductTypeAddAction(obj));

        console.log(obj)
        props.onHide()
    }
    

    const addproductTypeObj={
    }
    return(
        <>
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Product Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Type Name</Form.Label>
                    <Form.Control
                        type="Text"
                        autoFocus
                        placeholder="ProductType Name"
                        onChange={(e)=>{addproductTypeObj.productTypeName=(e.target.value)}}
                    /><br />
                    
                </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={props.onHide}>
                Close
            </Button>
            <Button variant="primary" onClick={()=>{
                handleAddproductType(addproductTypeObj);}}>
                Add ProductType
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default AddProductType;