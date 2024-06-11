import React from 'react'
import '../style/download.css'
import appstore from '../Image/image 6.png'
import playstore from '../Image/image 7.png'
export default function Download() {
  return (
    <>
    <div className='download_container'>
      <div>
              <div>No over-pricing</div>
              <p>Cheapest costs I Competitive prices</p>
      </div>
      <div className='download_divider'/>
      <div className='download_container_store_laptop'>
              <div>Download Now!</div>
              <div>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </div>
      </div>
          <div className='download_divider laptop'/>

      <div>
              <div>No return fare</div>
              <p>One-Way cab fare I No hidden charges</p>
      </div>
    </div>
    <div className='download_container_store'>
              <div>
                  <div>Download Now!</div>
                  <div>
                      <img src={appstore} alt="" />
                      <img src={playstore} alt="" />
                  </div>
              </div>
    </div>
         
      </>
  )
}
