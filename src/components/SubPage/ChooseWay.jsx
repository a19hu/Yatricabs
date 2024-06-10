import React from 'react'
import stopcar from '../Image/stopcar.png'
import '../style/way.css'
export default function ChooseWay() {
  return (
    <div>
          <div className='way_heading'>Why Choose One way Cab?</div>
      <div className='way_container'>
         <img src={stopcar} alt="" />
      </div>
      <div className='way_context'>
              Discover affordable travel with our seamless 
              intercity car rentals 
              in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!
      </div>
    </div>
  )
}
