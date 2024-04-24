import React from 'react'
import contact from '../../assets/vector/contact-us.png'
import PageHeader from '../PageHeader/PageHeader'
import EventList from './EventList'

function Event() {
  return (
    <div>
        <div style={{width:"100vw"}}>
         <PageHeader className="bgclass" heading='Key Events' bgimg={contact} />
        
      
        </div>
        <EventList/>
      
    </div>
  )
}

export default Event
