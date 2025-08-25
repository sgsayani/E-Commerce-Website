import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id="" />
            <p>By continuing, I agree to use the terms and privacy policy</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
