import React, { useState, useContext } from 'react'
import classes from './RnDForm.module.css'
import { mouseContext } from '../../context/mouseContext'
import axios from 'axios'

const RnDForm = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [experienceLevel, setExperienceLevel] = useState('')
    const [message, setMessage] = useState('')

    const [messageDisplay, setMessageDisplay] = useState('')
    const [valid, setValid] = useState()

    const submitHandler = async (e) => {
      e.preventDefault()

      // if(name.trim().length === 0 || message.trim().length === 0){
      //   setError('Please enter valid input')
      //   setValid(false)
      //   return
      // }

      try {
        const res = await axios.post('https://iqapexlabs.onrender.com/api/research', {
            name, email, message, phone, experienceLevel
        })
        // console.log(res?.data)

        if(res?.data?.status){
          setValid(res?.data?.status)
          setMessageDisplay(res?.data?.message)
        }
        
        if(res?.data?.status === 'success'){
          setEmail('')
          setName('')
          setMessage('')
          setExperienceLevel('')
          setPhone('')
        }
      } catch (error) {
        // console.log(error.message)
        setMessageDisplay("Something went wrong")
      }
      
      setTimeout(() => {
          setMessageDisplay('')
      }, 3000);
    }

  return (
    <div className={classes['rnd-form']}>
        <h1>You can still be a part of our Research & Development team</h1>

        <form className={classes.form} onSubmit={submitHandler} method="POST" data-netlify="true" name="rnd-form">
          <input type="hidden" name="form-name" value="rnd-form" />

          <div className={classes['input-fields']}>
            <div className={classes.field}>
              <input type="text" value={name} name="name" placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className={classes.field}>
              <input type="email" value={email} name="email" placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className={classes.field}>
              <input type="text" value={phone} name="phone" placeholder='Enter Mobile Number' onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
              <select value={experienceLevel} placeholder='Experience Level' name="experienceLevel" onChange={(e) => setExperienceLevel(e.target.value)} className={classes.field}>
                <option value="" disabled selected>-- Experience Level --</option>
                <option value="Internship">Internship</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div>
              <textarea value={message} rows="5" placeholder='Why do you want to join' name="message" onChange={(e) => setMessage(e.target.value)} className={classes.field} required></textarea>
            </div>
            <input type="submit" value="Apply Now" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} />
          </div>
          {valid === 'error'  && <p style={{color: 'red', textAlign: 'center'}}>{messageDisplay}</p>}
          {valid === 'success' && <p style={{color: '#008a00', fontWeight:'600', textAlign: 'center'}}>{messageDisplay}</p>}
        </form>
    </div>
  )
}

export default RnDForm