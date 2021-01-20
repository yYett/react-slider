 import React, {useState,} from 'react'
 import dados from './dados'
import SliderContent from './SliderContent'


 function Slider() {
    const [myid, setID] = useState(1)
     
    const next = () => {
        setID(prevID => prevID + 1)
    }

    const previos = () => {
        setID(prevID => prevID - 1)
    }

    const osDados = dados.filter(item => item.id === myid.toString()).map( item => 
        <SliderContent key={item.id} data={item} />)
    return (
        <div>
            <div>{osDados}</div>
            <h1>{myid}</h1>
            <button 
            style={{display: myid < dados.length ? null : 'none'}}
            onClick={next}>Next</button>

            <button 
            style={{display: myid < 2 || myid > dados.length ? "none" : null}}
            onClick={previos}>Previos</button>
        </div>
    )
 }
 
 export default Slider
 