import React,{useState} from 'react'
import '../style/form.css'
import { RxCrossCircled } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Form() {
  const [station,SetStation] = useState(true)
  const [way,setway]=useState(true)
  return (
    <div className='form'>
      <div>
        <div className='form_button'>
          <button onClick={() => SetStation(true)} className={`button ${station ? 'active' : ''}`}>Outstation</button>
          <button className='button'>Local</button>
          <button onClick={() => SetStation(false)} className={`button ${station ? '' : 'active'}`}>Airport</button>
        </div>
        {
          station ? 
            <div className='form_button'>
              <button onClick={() => setway(true)} className={`button_small ${way ? 'active' : ''}`}>One Way</button>
              <button onClick={() => setway(false)} className={`button_small ${way ? '' : 'active'}`}> Round Trip</button>
            </div>
            : null
        }
       
        <div>
          {
          station &&  way ?
              <div>
                <div className='form_container arrow' >

                <div>
                  <label htmlFor="">FROM</label>
                  <div className='input_container'>
                    <input type="text" />
                    <RxCrossCircled className='icon'/>

                  </div>
                </div>
                <div className='arrow_container'>
                    <FaArrowRight  size={22}/>
                  <FaArrowLeft  size={22}/>
                </div>
                <div>
                  <label htmlFor="">TO</label>
                  <div className='input_container'>
                    <input type="text" />
                      <CiLocationOn className='icon' />

                  </div>
                </div>
                </div>
                <div className='form_container without_arrow'>
                  <div>
                    <label htmlFor="">PICK UP DATE</label>
                    <div className='input_container'>
                      <input type="text" />
                      <IoMdTime className='icon' />

                    </div>
                  </div>
                  <div>
                    <label htmlFor="">PICK UP AT</label>
                    <div className='input_container'>
                      <input type="text" />
                      <MdOutlineDateRange className='icon' />

                    </div>
                  </div>
                </div>
                <div className='submit'>

                <button className='button_big '>EXPLORE CABS</button>
                </div>

              </div>
              :
                station ?
                <div>
                  <div className='form_container arrow'>

                    <div>
                      <label htmlFor="">FROM</label>
                      <div className='input_container'>
                        <input type="text" />
                        <RxCrossCircled className='icon' />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="">TO</label>
                      <div className='input_container'>
                        <input type="text" />
                        <CiCirclePlus className='icon' />

                      </div>
                    </div>
                  </div>
                  <div className='form_container three_input arrow'>
                    <div>
                      <label htmlFor="">PICK UP DATE</label>
                      <div className='input_container'>
                        <input type="text" />
                        <MdOutlineDateRange className='icon' />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="">RETURN DATE</label>
                      <div className='input_container'>
                        <input type="text" />
                        <MdOutlineDateRange className='icon' />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="">PICK UP AT</label>
                      <div className='input_container'>
                        <input type="text" />
                        <IoMdTime className='icon' />

                      </div>
                    </div>
                  </div>
                  <div className='submit'>

                    <button className='button_big '>EXPLORE CABS</button>
                  </div>

                </div>
              :
                <div>
                  <div className='form_container arrow'>

                    <div>
                      <label htmlFor="">FROM</label>
                      <div className='input_container'>
                        <input type="text" />
                        <MdOutlineArrowDropDown className='icon' />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="">TRIP</label>
                      <div className='input_container '>
                        <input type="text" />
                        <CiLocationOn className='icon' />

                      </div>
                    </div>
                  </div>
                  <div className='form_container arrow'>
                    <div>
                      <label htmlFor="">PICK UP</label>
                      <div className='input_container'>
                        <input type="text" />
                        <MdOutlineDateRange className='icon' />

                      </div>
                    </div>
                    <div>
                      <label htmlFor="">PICK UP AT</label>
                      <div className='input_container'>
                        <input type="text" />
                        <IoMdTime className='icon' />

                      </div>
                    </div>
                  </div>
                  <div className='submit'>

                    <button className='button_big '>EXPLORE CABS</button>
                  </div>

                </div>
              

          }
          
        </div>
      </div>
    </div>
  )
}
