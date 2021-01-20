import React from 'react'

function SliderContent(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.data.title}</h2>
            <p>{props.data.id}</p>
            <p>{props.data.descr}</p>
        </div>
    )
}

export default SliderContent
