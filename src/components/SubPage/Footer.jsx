import React from 'react'
import footerimg from '../Image/RIDE EVEE Logo 1.png'
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div>
        <div>
            <img src={footerimg} alt="" />
        </div>
        <div>
            <p>Home </p>
            <p>About </p>
            <p>Service</p>
            <p>News</p>
            <p>Contact</p>
                  <p>Privacy Policy</p>

        </div>
        <div>
                  <p>Newsletter</p>
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
