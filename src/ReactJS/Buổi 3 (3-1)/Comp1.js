import React from 'react'

const Comp1 = (props) => {
    const {icon,title,description} = props
  return (
    <div>
        <h3>{icon}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default Comp1