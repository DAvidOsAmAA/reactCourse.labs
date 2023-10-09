import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className='container-fluid row about-container'>
      <div className='col-12'>
      <h1 className='aboutTitle'>About The Party</h1>
      <p className='aboutParagraph mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. </p>
      <button className='about-btn rounded-pill mt-5'>Know more</button>
      </div>
    </div>
  )
}
