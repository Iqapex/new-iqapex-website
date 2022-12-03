import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './Career.module.css'
import HiringPost from './HiringPost'
import careers from '../../assets/vector/careers.jpg'
import RnDForm from './RnDForm'

const Career = () => {
  let showPost = true

  return (
    <>
      <PageHeader heading='Do You Want To Join Our Team' bgimg={careers} />

      <div className={classes.careers}>
          {!showPost && <h1 className={classes['post-title']}>Hiring will be started soon. Please stay connected.</h1>}

          {showPost && <><h1 className={classes['post-title']}>We Are <span>Hiring</span> Now</h1>
          <HiringPost title="MERN Stack Developer" desc='MERN Full stack developer is responsible for writing reusable and efficient code, Design and implementation of low-latency, high-availability, and performant applications.'  />

          </>
          }

          <RnDForm />

      </div>
    </>
  )
}

export default Career