import React from "react";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';

const ViewOrder = ({data}) =>{
    return(
        <>
            <div style = {{padding:"200px",paddingTop:"20px"}}>
                <h3>Orders</h3><br/>
                {/* <div class="">
                    <h5 style={{display: "inline-block"}}>Search Course</h5> &nbsp;&nbsp;&nbsp;
                    <input type="text" ref={courseId} class="" id="exampleFormControlInput1" placeholder="Course ID"/>&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={()=>{dispatch(getCourse(courseId.current.value))}}>Search</button>
                </div> */}
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Order Date</th>
                            <th>Total Amount</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data&& data.map((val)=>{
                                return(
                                    <tr>
                                        <td>{val.orderId}</td>
                                        <td>{val.orderDate}</td>
                                        <td>{val.totalAmount}</td>
                                        <td>{val.orderStatus}</td>
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

export default ViewOrder;