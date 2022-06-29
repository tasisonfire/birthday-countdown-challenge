import React from 'react'

const Card = (props) => {
  return (
    <div className='countdown__card'>
      <div className='countdown__card--time'>{props.time}</div>
      <div className='countdown__card--title'>{props.title}</div>
    </div>
  )
}

export default Card