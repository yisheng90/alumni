import React from 'react'

let Filter = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) => props.onChange(e)} placeholder={props.placeholder} className='form-control' />
    </div>
  )
}

export default Filter
