import React, { useState } from 'react'

const Whatthetime =()=>{
    const [seconds,setSeconds]=useState(null)
    const [minute,setMinute]=useState(null)
    const [hours,setHours]=useState(null)
    const timenow=(e)=>{
        switch(e.target.name){
            case 'seconds':{
                setSeconds(e.target.value)
                setMinute(e.target.value/60)
                setHours(e.target.value/60/60)
            }break;
            case 'minutes':{
                setSeconds(e.target.value*60)
                setMinute(e.target.value)
                setHours(e.target.value/60)
            }break;
            case 'hours':{
                setSeconds(e.target.value*60*60)
                setMinute(e.target.value*60)
                setHours(e.target.value)
            }break;
        }
    }
    return(
        <div>
            <div>Seconds: <input onChange={timenow} name={"seconds"} value={seconds}/></div>
            <div>Minute: <input onChange={timenow} name={"minutes"} value={minute}/></div>
            <div>Hours: <input onChange={timenow} name={"hours"} value={hours}/></div>
        </div>
    )
}

export default Whatthetime;
