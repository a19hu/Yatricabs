import React,{useState} from 'react'
import '../style/form.css'
import { RxCrossCircled } from "react-icons/rx";

export default function Form() {
  const [station,SetStation] = useState(true)
  const [way,setway]=useState(true)
  return (
    <div className='form'>
      <div>
        <div>
          <button onClick={() => SetStation(true)} >Outstation</button>
          <button>Local</button>
          <button onClick={() => SetStation(false)}>Airport</button>
        </div>
        {
          station ? 
            <div>
              <button onClick={() => setway(true)}>One Way</button>
              <button onClick={() => setway(false)}> Round Trip</button>
            </div>
            : null
        }
       
        <div>
          {
          station &&  way ?
              <div>
                <div>
                  <label htmlFor="">From</label>
                  <div><input type="text" />
                    <RxCrossCircled />

                  </div>
                </div>
              </div>
              :
                station ?
                  <div>
                  <div>
                    <label htmlFor="">to</label>
                    <input type="text" />
                  </div>
              </div>
              :
              null
              

          }
          
        </div>
      </div>
    </div>
  )
}
