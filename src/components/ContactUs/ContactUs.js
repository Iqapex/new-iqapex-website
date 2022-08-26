import React, { useState, useContext } from 'react'
import bgimg from '../../assets/img/contact-us.jpg'
import classes from './ContactUs.module.css'
import PageHeader from '../PageHeader/PageHeader'
import { mouseContext } from '../../context/mouseContext'
import contact from '../../assets/vector/contact-us.png'

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    // const [error, setError] = useState('')
    const [isValid, setIsValid] = useState(false)
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

    const submitHandler = (e) => {
        e.preventDefault()

        if(name.trim().length !== 0 && email.includes('@') && email.trim().length !== 0 && message.trim().length !== 0){
            setIsValid(true)
            setName('')
            setEmail('')
            setMessage('')
        }else{
            setIsValid(false)
        }
    }

  return (
    <>
        <PageHeader heading="We Are Always With You" bgimg={bgimg} />

        <h2 className={classes['contact-heading']}>Do you have any question on how <span style={{color: 'var(--primary-color)'}}>IQApex Labs</span> can help your business?</h2>

        <div className={classes['contact-details']}>
            <form className={classes.form} onSubmit={submitHandler} method="POST" netlify>
                <p>Send your query and we’ll reach out to you shortly</p>
                <input type="hidden" name="form-name" value="contact-form" />
                <div className={classes['form-input']}>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete='off'/>
                    <label>Full Name <span style={{color: 'red'}}>*</span></label>
                </div>
                <div className={classes['form-input']}>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' />
                    <label>Email Address <span style={{color: 'red'}}>*</span></label>
                </div>
                <div className={classes['form-input']}>
                    <textarea cols="30" rows="5" value={message} name="message" onChange={(e) => setMessage(e.target.value)} required autoComplete='off'></textarea>
                    <label>Message <span style={{color: 'red'}}>*</span></label>
                </div>
                <div className='button' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                    <button className={classes.btn}>Submit</button>
                </div>
            </form>

            <div className={classes['contact-img']}>
                <img src={contact} alt="contact-us" />
            </div>
{/* 
            <div className={classes.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3955569294408!2d88.37140561479265!3d22.601699485167796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02762513072639%3A0x6f41b087f0d9bb86!2sShyambazar%205%20Point%20Crossing%2C%20Baghbazar%2C%20Kolkata%2C%20West%20Bengal%20700003!5e0!3m2!1sen!2sin!4v1658739013846!5m2!1sen!2sin" title="map" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </div>
    </>
  )
}

export default ContactUs