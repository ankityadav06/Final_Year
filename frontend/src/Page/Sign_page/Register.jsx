import React from 'react';
import './Register.css';

function Register() {
  return (
    
    <div className='Register-form'>
      <div className='Header-text'>
        Register
        <div className='Cut'>
          <p  className="cut" type='cut'><a href='/home'><h4>x</h4></a></p>
        </div>
        <form>
        <div className='user-name'>
          <div className='name'>
            <label>Enter first name</label>
            <input type='text' placeholder='Enter your first name' required></input>
            <label>Enter last name</label>
            <input type='text' placeholder='Enter your last name' required></input>
          </div>
        </div>

        <div className='user-name'>
          <div className='name'>
            <label>Enter Email</label>
            <input type='email' placeholder='Enter your email ' required></input>
            <label>Enter phone number</label>
            <input type='phone' placeholder='Enter your phone ' required></input>
          </div>
        </div>

        <div className='user-name'>
          <div className='name'>
            <label>Enter age</label>
            <input type='number' placeholder='Enter age ' required></input>
            <label for="cars">Choose a Gander:</label>
            <select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>    
          </div>
        </div>

      

        <div className='user-name'>
          <div className='name'>
            <label>Enter Password</label>
            <input type='password' placeholder='Enter password ' required></input>
            <label>Enter confirm Password</label>
            <input type='password' placeholder='Enter confirmPassword' required></input>
          </div>
        </div>

        <div className='submitbutton'>
          <button className='button' type='submit'>submit</button>
          <p>Already have an account? <a href='/Login' style={{color:"dodgerblue"}}>Login</a></p>
        </div>


        </form>
      </div>
    </div>
  )
}

export default Register