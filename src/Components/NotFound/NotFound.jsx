import React from 'react'
import error from '../../Assets/error.svg'

export default function NotFound() {
  return <>
  <div className="container mt-5">
    <img src={error} className='w-100' alt="error" />
  </div>
  </>
}
