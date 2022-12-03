import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './CareerForm.module.css'
import { mouseContext } from '../../context/mouseContext'

const yearArr = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

const CareerForm = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)
    const {domain} = useParams()
    const [candidateInfo, setCandidateInfo] = useState({
        fullname: '',
        email: '',
        mobilenumber: '',
        college: '',
        passout: null,
        address: '',
        // st: '',
        // district: '',
        // pincode: '',
        github: '',
        linkedin: '',
    })
    const [cv, setCV] = useState('')
    const [mandatory, setMandatory] = useState(true)
    const [message, setMessage] = useState('')
    const [showMessage, setShowMessage] = useState(false)

    let asterisk;
    if(mandatory){
        asterisk = <span style={{color: 'red', fontSize: '16px'}}>*</span>
    }

    const onFieldChange = (e) => {
        setCandidateInfo({
            ...candidateInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setShowMessage(true)

        try {
            const res = await axios.post('https://iqapexlabs.onrender.com/api/candidate', {
                ...candidateInfo,
                domain: domain,
                resume: cv
            })
            // console.log(res?.data)
            setMessage(res?.data?.message)

            setTimeout(() => {
                setShowMessage(false)
            }, 4000);
        } catch (error) {
            // console.log(error.message)
            setMessage(error.message)
        }
    }


  return (
    <div>
        <h1>Job Application Form</h1>
        <form className={classes['job-apply_form']} onSubmit={onSubmitHandler}>
            <div className={classes['input-field']}>
                <label>Full Name{asterisk}</label>
                <input type="text" name='fullname' value={candidateInfo.fullname} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Email{asterisk}</label>
                <input type="email" name='email' value={candidateInfo.email} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Mobile Number{asterisk}</label>
                <input type="text" name='mobilenumber' value={candidateInfo.mobilenumber} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>College Name{asterisk}</label>
                <input type="text" name='college' value={candidateInfo.college} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Passout Year{asterisk}</label>
                <select name='passout' className={classes.passout} onChange={onFieldChange}>
                    <option selected disabled>----</option>
                    {yearArr.map((year, i) => (
                        <option key={i} value={candidateInfo.passout}>{year}</option>
                    ))}
                </select>
            </div>
            <div className={classes['input-field']}>
                <label>Current Address{asterisk}</label>
                <input type="text" name='address' value={candidateInfo.address} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Applied for{asterisk}</label>
                <input type="text" name='domain' value={domain} disabled />
            </div>
            <div className={classes['input-field']}>
                <label>Github URL</label>
                <input type="text" name='github' value={candidateInfo.github} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Linkedin URL</label>
                <input type="text" name='linkedin' value={candidateInfo.linkedin} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label htmlFor='resume'>
                    <input type='file' accept="doc/*" id='resume' name='cv' onChange={(e) => { setCV(e.target?.files[0]?.name)}} required />
                    {/* <button>Upload CV</button> */}
                </label>
            </div>

            <button type='submit' className={classes.btn} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                Submit
            </button>

            {showMessage && <p>{message}</p>}
        </form>
    </div>
  )
}

export default CareerForm