import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className='contact container-fluid m-0 p-0 row'>
      <div className='col-4 wolfContainer p-0 m-0'>
      <img src={require('../../images/16.jpg')} alt="" className='wolfImg' />
      </div>
      <div className='col-8 contactContainer'>
        <div className='ContactWithTitleAndInput'>
        <h1 className='titleContact mb-3'>Signup For Newsletter</h1>
        <div className='d-inline-block w-100 containerInputWithBtn'>
        <input type="text" className='inputSub'/>
        <button className='subscribe-btn'>subscribe</button>
        </div>
        <h6 className='getUpdate'>Get Update</h6>
        <div className='icons '>
        <span className='p-2' ><FontAwesomeIcon icon={faFacebook} /></span>
        <span className='p-2'><FontAwesomeIcon icon={faTwitter} /></span>
        <span className='p-2'><FontAwesomeIcon icon={faLinkedin} /></span>
        <span className='p-2'><FontAwesomeIcon icon={faPinterest} /></span>
        </div>
        </div>
      </div>
    </div>
  )
}
