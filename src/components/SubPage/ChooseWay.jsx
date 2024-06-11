import React from 'react'
import stopcar from '../Image/stopcar.png'
import text1 from '../Image/Group 1686551840.png'
import text2 from '../Image/Group 1686551841.png'
import '../style/way.css'
export default function ChooseWay() {
  return (
    <div>
          <div className='way_heading'>Why Choose One way Cab?</div>
      <div className='way_container'>
        <img src={text1} alt="" />
         <img src={stopcar} alt="" />
         <img src={text2} alt="" />
      </div>
      <div className='way_context'>
              Discover affordable travel with our seamless 
        <span style={{ color: 'rgba(33, 105, 0, 1)',fontWeight:'600' }}> intercity car rentals </span>   
              in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!
      </div>
    </div>
  )
}
