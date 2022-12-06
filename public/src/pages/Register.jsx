import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios'
import { registerRoute}  from '../utils/APIRoutes'
// import 'react-toastify/dist/react-toastify'

function Register() {

    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        cpassword:''
    })

const handleSubmit =async (event)=>{
  event.preventDefault();
  // if(handleValidation()){
      console.log('here')
      console.log("in validation",registerRoute)
        const{username, email, password, cpassword} = values;
        const {data} = await axios.post(registerRoute, {
            username,
            email,
            password,
            cpassword,
        })

    // }
}


const handleValidation=()=>{
    const password = values.password;
    const cpassword = values.cpassword;
    if(password!==cpassword){
        alert("Password & confirm password would be same.") 
        return false;
    }
}

const handleChange = (event)=>{
    setValues({...values,[event.target.name]:event.target.value})
}

  return (
    <>
    <FormContainer>
        <div className='container my-3'>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            autoComplete="true"
            placeholder='username'
            name="username"
            onChange={(e)=>handleChange(e)}
            
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder='Email'
            name="email"
            autoComplete="true"
            onChange={(e)=>handleChange(e)}
            
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            autoComplete="true"
            placeholder='password'
            name="password"
            onChange={(e)=>handleChange(e)}
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder='confirm password'
            id="cpassword"
            autoComplete="true"
            name="cpassword"
            onChange={(e)=>handleChange(e)}
           
          />
        </div>
        
        <button type='submit' className="btn btn-primary mx-2">Create user</button>
            <span>already have an account <Link to='/login'>Login</Link></span>
      </form>
      </div>
        {/* <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
                <img src="" alt="" />
                <h1>chat</h1>
            </div>
            <input type="text" placeholder='username' name='username' onChange={(e)=>handleChange(e)} />
            <input type="email" placeholder='Email' name='email' onChange={(e)=>handleChange(e)} />
            <input type="password" placeholder='password' name='password' onChange={(e)=>handleChange(e)} />
            <input type="password" placeholder='confirm password' name='cpassword' onChange={(e)=>handleChange(e)} />
            <button type='submit'>Create user</button>
            <span>already have an account <Link to='/login'>Login</Link></span>
        </form> */}
    </FormContainer>
    {/* <ToastContainer/> */}
    </>

  )
}

const FormContainer =styled.div`

height:100vh;
width:100vw;
display:flex

flex-direction:column

.brand{
    color:red
}
.h1{
    color:pink
}
`;


export default Register
