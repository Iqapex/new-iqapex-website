import axios from 'axios'
import React, { useContext, useState } from 'react'
import bgimg from '../../assets/img/contact-us.jpg'
import contact from '../../assets/vector/contact-us.png'
import { mouseContext } from '../../context/mouseContext'
import PageHeader from '../PageHeader/PageHeader'
import classes from './ContactUs.module.css'

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [displayMessage, setDisplayMessage] = useState('')
    // const [isValid, setIsValid] = useState(false)
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

    const submitHandler = async (e) => {
        e.preventDefault()

        try {     
            const res = await axios.post('https://iqapexlabs.onrender.com/api/client/contact', {
                name, email, message
            })
            // console.log(res.data)
            if(res.data?.status === 'success'){
                setName('')
                setEmail('')
                setMessage('')
            }
        } catch (error) {
            // console.log(error.message)
            setDisplayMessage(error.message)
        }

        // if(name.trim().length !== 0 && email.includes('@') && email.trim().length !== 0 && message.trim().length !== 0){
        //     // setIsValid(true)
        //     setName('')
        //     setEmail('')
        //     setMessage('')
        // }else{
        //     // setIsValid(false)
        // }
    }

  return (
    <>
        <PageHeader heading="We Are Always With You" bgimg={bgimg} />

        <h2 className={classes['contact-heading']} style={{color:"#B6EADA"}}>Do you have any question on how <span style={{color: 'var(--primary-color)'}}>IQApex Labs</span> can help your business?</h2>

        <div className={classes['contact-details']}>
            <form className={classes.form}>
                <div className={classes['form-input']}>
                    <h3 className={classes['contact-heading']} style={{color:"#B6EADA"}}>Dear Sir/Ma'am,</h3>
                    
                    <p style={{color:"#F5F5F5"}}>We are thrilled to assist you with your enquiries and help you achieve your business goals. Please feel free to contact us via the email or by mobile no. .</p>
                    <h4 style={{color:"#F5F5F5"}}>IQApex Labs</h4>
                    <p style={{color:"#F5F5F5"}}>Email: contact@iqapexlabs.com or contact.iqapexlabs.com</p>
                    <p style={{color:"#F5F5F5"}}>Mobile: +91 6289569385</p>
                    
                </div>
            </form>

            <div className={classes['contact-img']}>
                <img src={contact} alt="contact-us" />
            </div>
        </div>
    </>
  )
}

export default ContactUs