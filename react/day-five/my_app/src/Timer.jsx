import react from "react";
import { useState, useRef, useEffect } from 'react';

const Timer = () => {

    const [time,setTime]=useState(10)
    const timerRef= useRef(null)

    useEffect(()=>{
        const cleanup=()=>{
            stopTimer()
        }
        return cleanup
    },[])

    const startTimer=()=>{
        if(timerRef.current!==null){
            return
        }
        timerRef.current=setInterval(()=>{
            setTime((prevTime)=>{
                if(prevTime===1){
                    clearInterval(timerRef.current)
                }
                return prevTime-1
            })
        },1000)
    }

    const stopTimer=()=>{
        clearInterval(timerRef.current)
        timerRef.current=null
    }


    return(
        <div>
            <h1>Time : {time}</h1>
            <button onClick={startTimer} >Start</button>
            <button onClick={stopTimer} >Stop</button>
        </div>
    )

}

export default Timer