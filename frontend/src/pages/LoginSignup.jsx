// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className='login-container'>
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className="already">Already have an account? <span>Login</span> here</p>
        <div className="agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup