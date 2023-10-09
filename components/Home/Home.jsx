import React from 'react';
import home from '../../images/2.jpg'
import "./Home.css"
function Home() {

  return (
    <div className='home container-fluid m-0 p-0 ' >
      <div className='row'>
    <div className='col-6'>
    <img className='homeImg' src={home} alt="" />
    </div>
    <div className='col-6  '>
    <h1 className=' p-5 ms-5 m-0 title'>Halloween Party</h1>
    <p>Halloween or Hallowe'en (a contraction of All Hallows' Evening)<br />  also known as Allhalloween,All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
    <button className='rounded-pill mt-5 Explore'>Explore More</button>
    </div>
    </div>
    </div>
  );
}

export default Home;



