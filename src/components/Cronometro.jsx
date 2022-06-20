import React, { useState, useEffect }  from 'react'
import "./Cronometro.scss"

export const Cronometro = () => {
    const [time,setTime] = useState(0);
    const [timerOn, setTimerOn] =  useState(false);
    useEffect(() => {
        let interval = null;
        if (timerOn) {
        interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
       return () => clearInterval(interval);
      }, [timerOn]);
  
      return (
    
    <div className='cronometro'>
    <div className='esfera3'>
    <h1>Cronometro</h1>
    <h2><span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
     <span>{("0" + ((time / 10) % 100)).slice(-2)}</span></h2>
    
     <div id='button'>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Dale</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Para</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Borra</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
     </div>
    </div>
  )
}
