import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return <>
    <Helmet>
      <title>Contact Us</title>
    </Helmet>

    <div className="container mt-5 pt-5">
      <div className="form w-75 mx-auto">
        <div className="d-flex gap-3 mb-3">
        <input type="text" name="name" id="nameInp" placeholder='Enter Your Name' className='form-control rounded-3 w-50' />
        <input type="email" name="email" id="emailInp" placeholder='Enter Your Email' className='form-control rounded-3 w-50' />
        </div>
        <div className="d-flex gap-3 mb-3">
        <input type="tel" name="phone" id="phoneInp" placeholder='Enter Your Phone' className='form-control rounded-3 w-50' />
        <input type="number" name="age" id="ageInp" placeholder='Enter Your Age' className='form-control rounded-3 w-50' />
        </div>
        <div className="d-flex gap-3 mb-3">
        <input type="password" name="password" id="passInp" placeholder='Enter Your Password' className='form-control rounded-3 w-50' />
        <input type="password" name="rePassword" id="repassInp" placeholder='Repassword' className='form-control rounded-3 w-50' />
        </div>
        <div className="submit d-flex justify-content-center">
          <button className='btn btn-outline-danger w-25'>Submit</button>
        </div>
      </div>
    </div>
  </>
}
