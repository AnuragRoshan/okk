import React from "react";
import "./StartEndDate.css";
const StartEndDate = () => {
  return (
    <div className="topStartEnd">
      <div style={{marginInlineEnd:"30px"}}>
        Start Date: <input style={{marginLeft:"15px"}} type="date" name="startdate" id="start_datepicker" />
      </div>
      <div style={{marginInlineStart:"30px"}}>
        End Date: <input  style={{marginLeft:"15px"}} type="date" name="enddate" id="end_datepicker" />
      </div>
      <div>
        <button  style={{marginLeft:"80px",padding:"5px",color:"white",backgroundColor:"rgb(0, 154, 110)",border:"none",cursor:"pointer"}}>Button</button>
      </div>
    </div>
  );
};

export default StartEndDate;
