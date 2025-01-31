import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className='Login_page'>
      <div className='header'>Login
        <div className='cut'>
        <p  className="cut" type='cut'><a href='/home'><h4>x</h4></a></p></div>
        
      </div>
      <form className='logins'>
        <div className='label'>
          <label className='text'>Username</label>
          <input type='email' placeholder='Enter Username' required></input>
        </div>
        <div className='label'>
          <label className='text'>Password</label>
          <input type='password' placeholder='Enter Passwords' required ></input>
        </div>
        <div className='submit-button'>
          <button className='button' type='submit'>submit</button>
          <p>Already have an account? <a href='/sign' style={{color:"dodgerblue"}}>Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default Login