import React from 'react'
import '../style/journey.css'
import progess from '../Image/progess.svg'
// import carrun from 
export default function Journey() {
  return (
    <div className='journey'>
      <div className='journey_container'>
        <div className='journey_context'>
                  <div>Why choose AC Bus or AC Train for your <span style={{ color:'rgba(33, 105, 0, 1)'}}>One-way Journey</span> ?
                </div>
                  <p>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
                   <br /><span style={{ color:'black',fontWeight:'600'}}>Read More....</span>
                    </p>  
        </div>
        <div>
         {/* <img src={progess} alt="" /> */}
         
        </div>
      </div>
    </div>
  )
}
