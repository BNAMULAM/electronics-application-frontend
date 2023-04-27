import React, { useEffect, useState } from "react"
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {updateBasket,deleteBasket,getBasket} from "../actions/basketAction";
import {getCustomer,addOrderToCustomer} from "./../actions/customerAction";
import {addOrderaction} from "./../actions/orderAction";

const ViewBasket = ({user,data})=>{
    const dispatch = useDispatch();
    const [editBasketData,setEditBasketDta] = useState('');
    const [showEditBasketModal,setShowEditBasketModal] = useState(false);
    const [placeOrdereId,setPlaceOrdereId] = useState('');
    const [showPlaceOrderModal,setShowPlaceOrderModal] = useState(false);
    
    const getCustomerSelector = useSelector((state)=>state.getCustomerByUserName.getCustomerResp)
    const addOrderSelector = useSelector((state)=>state.addOrder.addOrderResp)

    useEffect(()=>{
        if(addOrderSelector.data){
            dispatch(addOrderToCustomer(getCustomerSelector.customerId,addOrderSelector.data.orderId));
            dispatch(getCustomer(getCustomerSelector.customerId))
        }
    },[addOrderSelector])
    
    const handleRemove = (val)=>{
        if (window.confirm(`Are you sure, you want to remove ${val.productName}`)) {

            const productIds = []
            for(const product in getCustomerSelector.basket.products){
                if(getCustomerSelector.basket.products[product].productId!=val.productId)
                productIds.push(getCustomerSelector.basket.products[product].productId)
            }
            const obj = {
                productCount: getCustomerSelector.basket.productCount-1,
                total:getCustomerSelector.basket.total-val.productPrice,
                productIds: productIds
            }
            dispatch(updateBasket(getCustomerSelector.basket.basketId,obj))
            dispatch(getCustomer(getCustomerSelector.customerId))
      }  
    }
    const EditBasket = (props)=>{
       const val = props.data;
       if(!val) return
       val.basketTypeId = val && val.baskettype && val.baskettype.basketTypeId
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Basket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={val? val.basketName : null}
                            onChange={(e)=>{val.basketName=(e.target.value)}}
                        /><br />
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val? val.basketPrice : null}
                            onChange={(e)=>{val.basketPrice=(e.target.value)}}
                        /><br />
                        <Form.Label>Basket Type Id</Form.Label>
                        <Form.Control
                            type="Number"
                            placeholder={val && val.baskettype ? val.baskettype.basketTypeId : null}
                            onChange={(e)=>{val.basketTypeId=(e.target.value)}}
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
                    dispatch(updateBasket(val))
                    setShowEditBasketModal(false)
                }}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handlePlaceOrder = ()=>{
        
        const productIds = []
        for(const product in getCustomerSelector.basket.products){
            productIds.push(getCustomerSelector.basket.products[product].productId)
        }
        const obj = {
            orderDate: new Date(),
            totalAmount:getCustomerSelector.basket.total,
            orderStatus: "Placed",
            products:productIds
        }
        dispatch(addOrderaction(obj))
    }

    return(
        <>
        <EditBasket 
            data={editBasketData}
            show={showEditBasketModal}
            onHide={()=>{setShowEditBasketModal(false)}}
        />
            <div style = {{paddingLeft:"300px",paddingTop:"20px"}}>
            <h3>Basket Total Amount: {getCustomerSelector.basket.total}</h3>
                <button onClick={()=>{handlePlaceOrder()}}> Place Order </button>
                {
                    data&& data.products && data.products.map((val)=>{
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
                                        <button onClick={()=>{
                                            // dispatch(getOffer())
                                            // setPlaceOrdereId(val.id);
                                            // setShowPlaceOrderModal(true);
                                            handleRemove(val);
                                        }}>Remove From basket</button>
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

export default ViewBasket