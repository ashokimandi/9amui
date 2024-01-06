"use client"

import React, { Fragment } from 'react'

export const Input = ({type, handleChange, model}) => {
  return (
    <Fragment>
        <input onChange={handleChange} className='form-control' type={type} name={model} />
    </Fragment>
    
  )
}
