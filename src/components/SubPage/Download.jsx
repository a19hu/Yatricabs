import React from 'react'
import '../style/download.css'
import appstore from '../Image/image 6.png'
import playstore from '../Image/image 7.png'
export default function Download() {
  return (
    <>
    <div className='download_container'>
      <div className='download_'>
              <div className='download_heading'>No over-pricing</div>
              <div className='download_context'>Cheapest costs I Competitive prices</div>
      </div>
      <div className='download_divider'/>
      <div className='download_container_store_laptop'>
          <div className='download_heading_download'>Download Now!</div>
              <div className='download_store'>
                <img src={appstore} alt="" />
                <img src={playstore} alt="" />
              </div>
      </div>
          <div className='download_divider laptop'/>

        <div className='download_'>
          <div className='download_heading'>No return fare</div>
          <div className='download_context'>One-Way cab fare I No hidden charges</div>
      </div>
    </div>
    <div className='download_container_store'>
          <div className='download_heading_download'>Download Now!</div>
                  <div className='download_store'>
                      <img src={appstore} alt="" />
                      <img src={playstore} alt="" />
              </div>
    </div>
         
      </>
  )
}
