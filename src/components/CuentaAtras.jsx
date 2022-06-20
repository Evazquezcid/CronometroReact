import React,{ useState, useEffect } from 'react'
import "./CuentaAtras.scss"

const CuentaAtras = () => {

  
      const [time,setTime] = useState("");
      useEffect (()=> {
          let CuentaAtrasDate = new Date ("July 25, 2022 00:00:00").getTime();
          let x = setInterval (() => {
            let now = new Date().getTime();
            let distance = CuentaAtrasDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

             setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
          
            if (distance < 0) {
            clearInterval(x);
            setTime("A LA PLAYA 🏝 ");
          }
          },1000)
      })
  


  return (
    <div className='cuentaatras'>
    <div className='esfera'>
    <h1>Cuenta atrás 🏝</h1>
    <h2>{time}</h2>
    </div>
    </div>
  )
}

export default CuentaAtras