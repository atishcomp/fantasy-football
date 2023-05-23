import React from 'react'
import './Playerdata.css'
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"
import {IoIosArrowDown} from "react-icons/io"
import { useState } from 'react'

const Playerdata = () => {
   
     const [displaydata,setDisplaydata]=useState([1,0,0,0,0,0,0,0])
     
  return (
    <div className='table_content'>
      <div className='table'>
     
        <div className='table_data' style={{background:'#1D1D1D',borderTopLeftRadius:10,borderTopRightRadius:10}}>
        <div className='name'>Name</div>
        <div className='team'>Team</div>
        <div className='position'>Position</div>
        <div className='salary'>Salary</div>
        <div className='points'>Points</div>

        </div>

        {displaydata.map((data,index)=>(
            <div>
            {data===1?(   <div className='table_data' style={{background:"#807B0F"}}>
            <div className='name' >Tom Brady</div>
            <div className='team' >TB</div>
            <div className='position'>QB</div>
            <div className='salary'>$11,200</div>
            <div className='points'>23</div>
            </div>):(   <div className='table_data'>
            <div className='name'>Patrick Mahomes</div>
            <div className='team'>KC</div>
            <div className='position'>QB</div>
            <div className='salary'>$8,800</div>
            <div className='points'>23</div>
            </div>)}

        </div>
       
        ))}

<div className='table_data' style={{background:'#262626',borderBottomLeftRadius:10,borderBottomRightRadius:10, color:'#FFFFFF'}}>
        <div className='name_bottom'>Page <span className='arr_down'>1 <span><IoIosArrowDown className='arr_down_symbol'  /></span></span></div>
        <div className='team_bottom'>Rows per page <span className='arr_down'>8 <span><IoIosArrowDown className='arr_down_symbol'/></span></span></div>
        <div className='position_bottom'>1-8 of 200</div>
        <div className='salary_bottom'><span><IoIosArrowBack/></span><span><IoIosArrowForward/></span></div>
    

        </div>
      </div>
      <div className='player_card'>
        <div className='player_image'>
            <img className='pl_img' src="https://s3-alpha-sig.figma.com/img/2011/61f4/4ee15efab3d428ddf84fe1db68312a85?Expires=1685923200&Signature=BJYqTQZPplbVSY~B~eRZnIQDobg3fBL7JnFlihd1yZY9Xiw59RjliElTO3ABovqlWQSBoVTdOz56FMVi6P1Sg9hijPiFPoC7w~6LsBe5YGGSK5kPoETwPcH7gm6ZafP43P3JXqd2nHHHMhGXG0LhUxFGoXL2vqaNlc3QW9p69WhrBFfb4E7rau-3-MZFFFWiCZimXnAeC5noclMGEfi83szyOpkKCQDuofjqMVVxr37BgHWdbUJlhEijtIypUbgyHgCo8bIBjIa~g0kXAKMCa1FaKTM4Umb5XZSDqKahVw-Xdp8DFDpjaAt6HIImn5mWsbFVX7BBhlQEnH5PwFdThg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </div>

        <div className='player_points'>
            <div className='player_name'>Tom Brady</div>
            <h1 className='point_value'>51</h1>
            <div className='points_text'>Points</div>
        </div>
      </div>
    </div>
  )
}

export default Playerdata
