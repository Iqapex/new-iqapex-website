import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from './CareerForm.module.css'

const yearArr = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

const CareerForm = () => {
    const [candidateInfo, setCandidateInfo] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        college: '',
        passoutYear: null,
        domain: '',
        address: '',
        st: '',
        district: '',
        pincode: '',
        github: '',
        linkedin: '',
    })
    const [cv, setCV] = useState('')
    const [mandatory, setMandatory] = useState(true)
    const {id} = useParams()

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

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(candidateInfo)
    }

  return (
    <div>
        <h1>Job Application Form</h1>
        <form className={classes['job-apply_form']} onSubmit={onSubmitHandler}>
            <div className={classes['input-field']}>
                <label>FullName{asterisk}</label>
                <input type="text" name='fullName' value={candidateInfo.fullName} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Email{asterisk}</label>
                <input type="email" name='email' value={candidateInfo.email} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Mobile Number{asterisk}</label>
                <input type="text" name='mobileNumber' value={candidateInfo.mobileNumber} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>College Name{asterisk}</label>
                <input type="text" name='college' value={candidateInfo.college} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Passout Year{asterisk}</label>
                <select name='passoutYear' onChange={onFieldChange}>
                    <option disabled>Select Below</option>
                    {yearArr.map((year, i) => (
                        <option key={i} value={candidateInfo.passoutYear}>{year}</option>
                    ))}
                </select>
            </div>
            <div className={classes['input-field']}>
                <label>Current Address{asterisk}</label>
                <input type="text" name='address' value={candidateInfo.address} onChange={onFieldChange} />
            </div>
            <div className={classes['input-field']}>
                <label>Applied for{asterisk}</label>
                <input type="text" name='domain' value="Mern Stack" disabled />
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
                    <input type='file' accept="doc/*" id='resume' onChange={(e) => { setCV(e.target.files[0]) }} />
                    <button>Upload CV</button>
                </label>
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CareerForm