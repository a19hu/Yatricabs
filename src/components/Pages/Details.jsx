import React from 'react'
import '../style/details.css'
import details from './Data'
export default function Details() {


  return (
    <div className='details'>
      {details.map((item) => {
        return (
          <div key={item.id} className='details_container'>
            <h2>{item.name}</h2>
            <div className='details_items'>
                    <li>{item.c1}</li>
                    <li>{item.c2}</li>
                    <li>{item.c3}</li>
                    <li>{item.c4}</li>
                    <li>{item.c5}</li>
                    <li>{item.c6}</li>
            </div>
           
          </div>
        )
      })}
    </div>
  )
}
