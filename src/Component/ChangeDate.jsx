import React, { useState } from 'react'
import './ChangeDate.css'


const ChangeDate = () => {

const [startdate, setstartdate] = useState("30th May")
const [enddate, setenddate] = useState("3rd June")

  return (
    <div className='topDate'>
        
            <button className='btn' style={{marginInlineEnd:"160px",fontSize:"30px"}}>-</button>
        
        <div className='changeDate'>{startdate} - {enddate}</div>
        <button className='btn' style={{marginInlineStart:"160px",backgroundColor:"#009a6e",fontSize:"30px",color:"white"}}>+</button>
    </div>
  )
}

export default ChangeDate