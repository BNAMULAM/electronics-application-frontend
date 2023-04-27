import React, { useEffect, useState } from "react";
import css from "./login.css"
import { Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
// import {loginAction} from "../actions/loginAction"
import { Navbar,Container,Nav  } from 'react-bootstrap';
import {registerAdmin,registerCustomer,login} from "./../actions/loginAction";
import {getCustomerByUserName} from "./../actions/customerAction";

const  Login = () => {
  
  const [errorMessages, setErrorMessages] = useState({});
  const [showRegisterAdminModel, setshowRegisterAdminModel] = useState(false);
  const [showRegisterCustoemrModel, setshowRegisterCustomerModel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [roleValue,setRoleValue] = useState();
  const loginResp =  useSelector((state)=>state.login.loginResp)

  useEffect(()=>{
    if(loginResp && loginResp.status==200){
      if(roleValue=="Admin" &&roleValue==loginResp.data.role){
        navigate("/admin-home")
      }
      else if(roleValue=="Customer" && roleValue==loginResp.data.role){
        dispatch(getCustomerByUserName(loginResp.data.username))
        navigate("/customer-home")
      }else{
        alert("login not found")
      }
    }
  },[loginResp])

  const RegisterAdminModel = (props)=>{
    let val = { userDetails:{role:"Admin"}}
    return(
      <>
      <Modal {...props}>
          <Modal.Header closeButton>
          <Modal.Title>Register Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                      type="Text"
                      autoFocus
                      placeholder="Name"
                      onChange={(e)=>{val.name=(e.target.value)}}
                  /><br />
                  <Form.Label>email</Form.Label>
                  <Form.Control
                      type="Text"
                      placeholder="email"
                      onChange={(e)=>{
                        val.email=(e.target.value);
                      }}
                  /><br />
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                      type="Text"
                      placeholder="Phone Number"
                      onChange={(e)=>{
                        val.phoneNum=(e.target.value);
                      }}
                  /><br />
                  <Form.Label>username</Form.Label>
                  <Form.Control
                     type="Text"
                     placeholder="username"
                     onChange={(e)=>{
                      val.userDetails.username=(e.target.value);
                     }}
                  /><br />
                  <Form.Label>password</Form.Label>
                  <Form.Control
                     type="Text"
                     placeholder="password"
                     onChange={(e)=>{
                      val.userDetails.password=(e.target.value);
                     }}
                  /><br />
                  
              </Form.Group>
              
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary"  onClick={props.onHide}>
              Close
          </Button>
          <Button variant="primary" onClick={()=>{
              dispatch(registerAdmin(val));
              setshowRegisterAdminModel(false)
              }}>
              RegisterAdmin
          </Button>
          </Modal.Footer>
      </Modal>
      </>
  )
 }
  
 const RegisterCustomerModel = (props)=>{
  let val = { userDetails:{role:"Customer"},address:{}}
  return(
    <>
    <Modal {...props}>
        <Modal.Header closeButton>
        <Modal.Title>Register Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="Text"
                    autoFocus
                    placeholder="Name"
                    onChange={(e)=>{val.customerName=(e.target.value)}}
                /><br />
                <Form.Label>email</Form.Label>
                <Form.Control
                    type="Text"
                    placeholder="email"
                    onChange={(e)=>{
                      val.email=(e.target.value);
                    }}
                /><br />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="Text"
                    placeholder="Phone Number"
                    onChange={(e)=>{
                      val.phoneNum=(e.target.value);
                    }}
                /><br />
                <Form.Label>username</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder="username"
                   onChange={(e)=>{
                    val.userDetails.username=(e.target.value);
                   }}
                /><br />
                <Form.Label>password</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder="password"
                   onChange={(e)=>{
                    val.userDetails.password=(e.target.value);
                   }}
                /><br />
                <Form.Label>address Line 1</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" role"
                   onChange={(e)=>{
                    val.address.line1=(e.target.value);
                   }}
                /><br />
                
                <Form.Label>address Line 1</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" address Line 1"
                   onChange={(e)=>{
                    val.address.line1=(e.target.value);
                   }}
                /><br />
                <Form.Label>address Line 2</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" address Line 2"
                   onChange={(e)=>{
                    val.address.line2=(e.target.value);
                   }}
                /><br />
                <Form.Label>city</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" city"
                   onChange={(e)=>{
                    val.address.city=(e.target.value);
                   }}
                /><br />
                <Form.Label>state</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" role"
                   onChange={(e)=>{
                    val.address.line1=(e.target.value);
                   }}
                /><br />
                <Form.Label>country</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" country"
                   onChange={(e)=>{
                    val.address.country=(e.target.value);
                   }}
                /><br />
                <Form.Label>postalcode</Form.Label>
                <Form.Control
                   type="Text"
                   placeholder=" postalcode"
                   onChange={(e)=>{
                    val.address.postalcode=(e.target.value);
                   }}
                /><br />
            </Form.Group>
            
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary"  onClick={props.onHide}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>{
            dispatch(registerCustomer(val));
            setshowRegisterCustomerModel(false)
            }}>
            RegisterAdmin
        </Button>
        </Modal.Footer>
    </Modal>
    </>
)
}

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass, role } = document.forms[0];
    if(!role.value || role.value==''){
      alert("please choose role")
      return;
    }
    setRoleValue(role.value)
    dispatch(login(uname.value,pass.value))

    // const userData = database.find((user) => user.username === uname.value);

    // if (userData) {
    //   if (userData.password == pass.value) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
    console.log(uname.value,pass.value,role.value)
  };

  const handleRegister = (event) =>{


    var { uname, pass, role } = document.forms[0];

    if(!role.value || role.value==''){
      alert("please choose role")
      return;
    }
    if(role.value=="Admin")
      setshowRegisterAdminModel(true)
    else  
      setshowRegisterCustomerModel(true)

  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Role </label>
        </div>
        <div>
          <input type="radio" value="Customer" name="role" required class="w-25" />Customer
          <input type="radio" value="Admin" name="role" required  class="w-25"/>Admin
          {renderErrorMessage("role")}
        </div>
        <div className="button-container pt-3">
          <input type="button" class="btn btn-success h-75 pr-3" value = "SignIn" onClick={(e)=>{handleSubmit(e)}}/>&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button" class="btn btn-dark h-75 pl-3" value = "RegisterAdmin" onClick={(e)=>{handleRegister(e)}}/>
        </div>
      </form>
    </div>
  );

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">Electronics Shopping <a href="/staffHome"></a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <RegisterAdminModel
          show={showRegisterAdminModel}
          onHide={()=>{setshowRegisterAdminModel(false)}}
        />
        <RegisterCustomerModel
          show={showRegisterCustoemrModel}
          onHide={()=>{setshowRegisterCustomerModel(false)}}
        />
      <div>
        <div className="app">
          <div className="login-form">
            <div className="title">Sign In</div>
            {renderForm}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;