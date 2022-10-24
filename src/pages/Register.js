import React from 'react'
import HomeBackground from "../img/background1.avif";
import "../style/register.css";

function Register() {
  return (
    <div className="register" style={{backgroundImage: `url(${HomeBackground})`}}>
          
          <form className="form-register" >
              <h1> <b>REGISTER</b> </h1>
              
                    <label htmlFor="name">First Name</label>
                    <input name="name"  type="text"></input>
                    <label htmlFor="name">Last Name</label>
                    <input name="name"  type="text"></input>
                    <label htmlFor="name">User Name</label>
                    <input name="name"  type="text"></input>
                    
                    <label htmlFor="pwd">Password</label>
                    <input name="pwd"  type="password"></input>

                    <button type="submit" className="btn btn-primary">Sign in</button>
              
                    <p className="forgot-password"> Already registered <a href="/login">Log in?</a></p>
              
          </form>
          </div>
          
      

  )
}

export default Register
