import React, { useEffect, useRef, useState } from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getAllProductTypes, getProductType, deleteProductType, updateProductType} from "./../actions/productTypeActions"


const ViewProductType = ({data,user}) =>{
    const productTypeId = useRef('');
    const dispatch = useDispatch();
    const [productTypeData,setProductTypeData] = useState(data);
    const [showEditProductTypeModal,setShowEditProductTypeModal] = useState(false);
    const [editProductTypeData,setEditProductTypeData] = useState('');
    const getProductTypeSelector = useSelector((state)=>state.getProductType.getProductTypeResp)

    const onDeleteProductType = (val)=>{
        if (window.confirm(`Are you sure, you want to delete ${val.productTypeName}`)) {
            dispatch(deleteProductType(val.productTypeId))
            dispatch(getAllProductTypes());   
      }  
    }

    const EditProductType = (props)=>{
        const val = props.data;
         return(
             <Modal {...props}>
                 <Modal.Header closeButton>
                 <Modal.Title>Edit ProductType</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                     <Form.Group className="mb-3" >
                         <Form.Label>ProductType Name</Form.Label>
                         <Form.Control
                             type="Text"
                             autoFocus
                             placeholder={val? val.productTypeName : null}
                             onChange={(e)=>{val.productTypeName=(e.target.value)}}
                         /><br />
                        
                     </Form.Group>
                     
                 </Modal.Body>
                 <Modal.Footer>
                 <Button variant="secondary"  onClick={props.onHide}>
                     Close
                 </Button>
                 <Button variant="primary" onClick={()=>{
                     dispatch(updateProductType(val))
                     setShowEditProductTypeModal(false)
                 }}>
                     Update
                 </Button>
                 </Modal.Footer>
             </Modal>
         )
     }

    useEffect(()=>{
        if(getProductTypeSelector && !getProductTypeSelector.data)
            setProductTypeData([getProductTypeSelector])
    },[getProductTypeSelector])
    return(
        <>
            <EditProductType 
                data={editProductTypeData}
                show={showEditProductTypeModal}
                onHide={()=>{setShowEditProductTypeModal(false)}}
            />
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>ProductTypes</h3><br/>
                <div class="">
                    <h5 style={{display: "inline-block"}}>Search ProductType</h5> &nbsp;&nbsp;&nbsp;
                    <input type="text" ref={productTypeId} class="" id="exampleFormControlInput1" placeholder="ProductType ID"/>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={()=>{dispatch(getProductType(productTypeId.current.value))}}>Search</button>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productTypeData&& productTypeData.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.productTypeId}</td>
                                        <td>{val.productTypeName}</td>
                                        <td>
                                                    <button onClick={()=>{
                                                        setEditProductTypeData(val);
                                                        setShowEditProductTypeModal(true);
                                                    }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button onClick={()=>{
                                                        onDeleteProductType(val)
                                                    }}>Delete</button>
                                        </td>
                                        {/* <td>
                                            {
                                               user =="APPLICANT"?
                                               <>
                                                <button 
                                                onClick={()=>{onApply(val)}} 
                                                disabled = { applicantProductTypeSelector && applicantProductTypeSelector.length>0 }
                                                >Apply</button>
                                                {
                                                    applicantProductTypeSelector && applicantProductTypeSelector.includes(val.productTypeId)?
                                                    <button onClick={()=>{onCancel(val)}}>Cancel</button>:
                                                    null
                                                }
                                                </>:
                                               <>
                                                     <button onClick={()=>{
                                                        setEditProductTypeData(val);
                                                        setShowEditProductTypeModal(true);
                                                    }}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button onClick={()=>onDeleteProductType(val)}>Delete</button>
                                               </>
                                            }
                                           
                                        </td> */}
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default ViewProductType;