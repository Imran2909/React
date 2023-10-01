import React from 'react'

function Avatar(props) {
  return (
    <div>
        <img src={props.url} alt="" />
        <h1>{props.name}</h1>
        <h3>{props.post}</h3>
    </div>
  )
}

export default Avatar