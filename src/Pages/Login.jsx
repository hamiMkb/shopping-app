import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        
        <div className='login'>
          <div className="login-container">
            <h1>Sign Up</h1>
            <div className="login-fields">
              <input type="text" placeholder='Your Name' />
              <input type="email" placeholder='You Email'/>
              <input type="password" placeholder='Enter Your Password...'/>
            </div>
            <button>Continue</button>
            <Link to='/'><button onClick={()=>window.scrollTo(0,0)} style={{backgroundColor:'black'}}>Go to Home Page</button></Link>

            <div className='login-login'>
              <p >Already have an Account ?</p><span>Login Here</span>
            </div>
            
         

          </div>
          
        </div>
    
    </>

  )
}

export default Login