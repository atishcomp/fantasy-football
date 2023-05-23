import React from 'react'
import './Filter.css'
import {IoIosArrowDown} from "react-icons/io"

const Filter = () => {
  return (
    <div className='outer_box'>
      <div className='content_box'>
       <div className='box1'>Select Operator <span ><IoIosArrowDown className='select' /></span></div>
       <div className='box2'>Select Game Type <span><IoIosArrowDown className='select' /></span></div>
       <div className='box3'>Select Slate Name <span><IoIosArrowDown className='select' /></span></div>

      </div>
    </div>
  )
}

export default Filter
