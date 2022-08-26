import React, { useState } from 'react'
import PageHeader from '../PageHeader/PageHeader'
import classes from './Career.module.css'
import HiringPost from './HiringPost'
import careers from '../../assets/vector/careers.jpg'
import RnDForm from './RnDForm'

const Career = () => {
  let showPost = false

  return (
    <>
      <PageHeader heading='Do You Want To Join Our Team' bgimg={careers} />

      <div className={classes.careers}>
          {!showPost && <h1 className={classes['post-title']}>Hiring will be started soon. Please stay connected.</h1>}

          {showPost && <><h1 className={classes['post-title']}>We Are Now <span>Hiring</span></h1>
          <HiringPost title="MERN Stack Developer" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium libero consequatur sunt labore in id voluptate eaque corporis delectus voluptates minus porro deleniti, iste praesentium provident, sint est necessitatibus!' />

          <HiringPost title="Graphics Designer" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium libero consequatur sunt labore in id voluptate eaque corporis delectus voluptates minus porro deleniti, iste praesentium provident, sint est necessitatibus!' /></>}

          <RnDForm />

      </div>
    </>
  )
}

export default Career