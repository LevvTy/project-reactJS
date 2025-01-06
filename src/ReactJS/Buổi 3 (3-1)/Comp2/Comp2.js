import React from 'react'
// import Properties from './Properties'

const Properties = (props) => {
    const { color, text } = props
    return (
        <h1 style={{ backgroundColor:  color  }}>{text}</h1>
    )
}

const Comp2 = (props) => {
    const { title, des } = props
    return (
        <>
            <div>
                <Properties />
                <div>
                    <h2>{title}</h2>
                    <p>{des}</p>
                </div>
            </div>
        </>
    )
}

export default Comp2