import React from 'react';
import HomeBackground from "../img/background1.avif";
import "../style/login.css"

function Login() {
  return (
    //body login
    <div className="login" style={{backgroundImage: `url(${HomeBackground})`}}>
            
            <form className="form-login-mau-trang"> 
                    <h1 className="tieu-de-login"><b>Log in</b>  </h1>

                    <label htmlFor="name">User Name</label>
                    <input name="name"  type="text"></input>
                    
                    <label htmlFor="pwd">Password</label>
                    <input name="pwd"  type="password"></input>

                    <button type="submit-btn" className="btn btn-primary">Log in</button>
                    <p className="forgot-password"> or <a href="/register"> Register Account</a></p>
            </form>
    </div>
  )
}

export default Login
