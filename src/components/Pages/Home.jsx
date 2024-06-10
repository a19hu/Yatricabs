import React from 'react'
import '../style/home.css'
import app from '../Image/app.png'
import logo from '../Image/logo.png'
import phone from '../Image/phone.png'
import ravi from '../Image/ravi.png'
import background from '../Image/background.png'
import Form from '../SubPage/Form'
export default function Home() {


  const mystyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "86vh",
    with: "100vw",
  };

  return (
    <div>
      <div className='heading_navbar'>
        <div className='heading_container'>

      <img src={logo} alt="" className='heading_img' />
        <img src={phone} alt="" className='heading_img' />
      <div>
          <img src={app} alt="" className='heading_img' />
          <img src={ravi} alt="" className='heading_img' />
      </div>
        </div>
      </div>
      <div className='homepage' style={mystyle} >
        <div className='home_container'>
          <div className='heading_back'>

          <div className='heading'>
            India's {'\n'}
            <span 
            // style={{ color:"rgba(33, 105, 0, 1)",fontWeight:"600"}}
            > 
            Leading One-Way Inter-City
            </span>  Cab Service Provider
          </div>
          </div>
          <div>
          <Form/>

          </div>
        </div>
      </div>
    </div>
  )
}
