"use client"
import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'
import configuration from "./configuration.json"
import { Input } from '@/inputControls'
import { handleFieldValidations, handleFormValidations } from '@/validations/appValidations'

export const Login = () => {
  const [inputControls, setInputControls] = useState(configuration)
  const fnChange = (event)=> {
      const {name, value}=event.target;
      console.log(name, value)
      setInputControls(handleFieldValidations(event, inputControls))
  }
  const handleFn = () => {
      handleFormValidations()
  }
  return (
    <div className='container-fluid'>
        <h1 className='text-center my-3'>Login</h1>
        {
          inputControls.map(({lbl, type, errorMessage, value, model})=>{
              return <div className='row mb-3'>
              <div className='col-sm-5 text-end'>
                  <b>{lbl}: </b>
              </div>
              <div className='col-sm-3'>
                  <Input model={model} type={type} handleChange={fnChange} value={value}/>
              </div>
              <div className='col-sm-4'>
                  <b className='text-danger'>{errorMessage}</b>
              </div>
            </div>
          })
        }
        
        <div className='row'>
            <div className='offset-sm-5 col-sm-7'>
              <button onClick={handleFn} className='btn btn-primary me-3'>Login</button>
              <Link href="/register">To Register</Link>
            </div>
        </div>
    </div>
  )
}
