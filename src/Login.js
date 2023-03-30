import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import "./App.css"



const Login = () => {

  const [name, setName] = useState("");
    
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleNameChange = (e) => {
          setName(e.target.value);
        };
       
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // perform login logic here, such as sending data to a server

          
                                                                             
     };
      
  return (
    <>
    <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="login.jpg"
          class="img-fluid" alt ="login"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>

        <div class="form-outline mb-4">
            <input type="text" id="form1Example13" class="form-control form-control-lg" value={name} onChange={handleNameChange} />
            <label class="form-label" for="form1Example13">Name</label>
          </div>
     
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" value={email} onChange={handleEmailChange} />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" value={password} onChange={handlePasswordChange} />
            <label class="form-label" for="form1Example23">Password</label>
          </div>
          <div class="d-flex justify-content-around align-items-center mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <p>Create Account <span><NavLink to="/login">Sign Up</NavLink></span> </p>
          <br/>
        </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login