import React, { useEffect , useState} from "react" 
import "./Reloj.scss"

const Reloj = () => {
    const [clockState,setClockState] = useState ();


    useEffect (()=>{
    setInterval(()=>{
        const date = new Date();
        setClockState(date.toLocaleTimeString());
    },1000)
})
  return (
    <div className="reloj">
    <div className="esfera">
    <h1>Reloj Digital</h1>
    <h2>{clockState}</h2>
    </div>
    </div>
  )
}

export default Reloj