import React from 'react'
import footerimg from '../Image/RIDE EVEE Logo 1.png'
import { FaArrowRight } from "react-icons/fa";
import '../style/footer.css'
export default function Footer() {
  return (
    <div>
      <div className='footer_container'>
        <div>
            <img src={footerimg} alt="" />
        </div>
        <div>
            <div>Home </div>
            <div>About </div>
            <div>Service</div>
            <div>News</div>
            <div>Contact</div>
                  <div>Privacy Policy</div>

        </div>
        <div>
                  <div>Newsletter</div>
                  <input type="text" />
                  <div>
                      <FaArrowRight />

                  </div>
        </div>
              <div>All Copyrights are reserved by RIDE EVEE</div>
      </div>
    </div>
  )
}
