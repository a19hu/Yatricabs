import React from 'react'
import '../style/home.css'
import logo from '../Image/logo.png'
import phone from '../Image/phone.png'
import ravi from '../Image/ravi.png'
import background from '../Image/background.png'
import Form from '../SubPage/Form'
import group from '../Image/Group 17.png'
import Download from '../SubPage/Download'
export default function Home() {

  return (
    <div>
      <div className='heading_navbar'>
        <div className='heading_container'>

          <img src={logo} alt="" className='heading_img' />
          <img src={phone} alt="" className='heading_img' />
          <div>
            <img src={group} alt="" className='heading_img' />
            <img src={ravi} alt="" className='heading_img' />
          </div>
        </div>
      </div>
      <div className='homepage'  >
        <div className='backgroundimage'>
          <img src={background} alt="" />
        </div>
        <div className='home_container'>
          <div className='heading_back'>
            <div className='heading'>
              India's {'\n'}
              <span              >
                Leading One-Way Inter-City
              </span>  Cab Service Provider
            </div>
            <Form />
          </div>
          <div className='download'>
            <Download />
          </div>
        </div>

      </div>
    </div>
  )
}
