import React from 'react'
import "./Artist.css"
export default function Artist() {
  return (
    <div className='artist container-fluid row m-0 '>
    
    <div className='col-2   first'>
  <img src={require('../../images/6.jpg')} className='img1' alt="..." />
  </div>
  <div className='col-2  second'>
  <img src={require('../../images/10.jpg')} className='img2' alt="..." />
  </div>
  <div className='col-2  third'>
  <img src={require('../../images/14.jpg')} className='img3' alt="..." />
  </div>
  <div className='col-2  fourth'>
  <img src={require('../../images/12.jpg')} className='img4' alt="..." />
  </div>
    </div>
    
  )
}
