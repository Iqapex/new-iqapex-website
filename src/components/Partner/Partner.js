import React, {useContext, useState} from 'react'
import classes from './Partner.module.css'
import img from '../../assets/partners/brick.54298af026c4e8ff4d60.jpg'
import imggggggggg6 from '../../assets/partners/comp-f.d9f02e1aee92875c66df.png'
import imgggggg from '../../assets/partners/comp-ff.e10f99562590e8995892.png'
import imgg from '../../assets/partners/bitabox.png'
import imggg from '../../assets/partners/partner-5.png'
import img3 from '../../assets/partners/Biswa_Bangla.jpg'
import img66 from '../../assets/partners/partner-6.png'
import img1 from '../../assets/partners/startup-india.png'
import img2 from '../../assets/partners/msme.png'
import img4 from '../../assets/img/nasscom.jpg'
import bita from '../../assets/img/bita.png'
import img5 from '../../assets/img/bcc.jpg'
import img6 from '../../assets/partners/iqponics.png'
import img9 from '../../assets/img/ISI.png'
import img7 from '../../assets/img/STPI.png'
import img8 from '../../assets/partners/STPINEXT.png'
import img10 from '../../assets/partners/agro.jpg'
import img12 from '../../assets/partners/healing.png'
import img11 from '../../assets/partners/iitkgpagribusinesstbi-withoutbg.png'
import img15 from '../../assets/img/STCHTT.png'
import img14 from '../../assets/img/bongobd.svg'
import img13 from '../../assets/partners/zamsof.jpg'


import STCHTT from '../../assets/img/STCHTT.png'
import { mouseContext } from '../../context/mouseContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const Partner = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(mouseContext)

  const createSlide = (image) => {
    return(
      <SwiperSlide className={classes.partnerflex}>
        <div className={classes.partner}>
          <img src={image} alt="partner" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
        </div>
      </SwiperSlide>
    )
  }
  //const [im,setim]=useState([img1,img2,img3,img4,img5,img6])
  const images =[
    {
      "img":img1
    },
    {
      "img":img2
    },
    {
      "img":img3
    },
    {
      "img":img4
    },
    {
      "img":img5
    },
    {
      "img":img6
    },
    {
      "img":img7
    },
    {
      "img":img8
    },
    ,
    {
      "img":img9
    },
    {
      "img":img10
    },
    {
      "img":img11
    },
    {
      "img":img12
    },
    {
      "img":img13
    },
    {
      "img":img14
    },
    {
      "img":img15
    }
    


  ]
  console.log(images);

  return (
  <>
    <div className='section-title'>
      <h1 className='section-heading'>We Are Recognised & Trusted By</h1>
      <br></br>
      <h5 className='section-subheading'>THE COUNT IS GOING ON</h5>
    </div>
    <div className={classes.partners}>
     {/* <img src={img1}/> */}
    <div>
    {/* <images
      imagesInfoArray={images}
      columnCount={"auto"}
      columnWidth={230}
      gapSize={24}
    /> */}
   {/* <div id="img-wrapper">
   {
      images.map(image => (
        //console.log(image.img)
        <div >
          <img src={image.img}></img>
        </div>
      ))
    }
    </div>
    */}
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"space-evenly","alignItems":"center"}}>
    {
      images.map(image => (
        //console.log(image.img)
        <div style={{"width":'20vw',"height":"20vh","margin":"1rem 0"}}>
          <img style={{"display":"block","width":"80%","height":"90%"}} src={image.img}></img>
        </div>
      ))
    }
    
    </div>

    
    </div>
    
</div>
</>
  )
}

export default Partner