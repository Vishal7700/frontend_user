import React from 'react'
import Navbar from './Navbar'
import img1 from '../images/doc1.png'
import img2 from '../images/doc2.png'
import img3 from '../images/doc3.png'
import { data } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Dashboard() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className='h-2/5 mt-16 '>
          <h1 className='text-3xl text-center text-primary'>BOOK AN APPONITMENT WITH DOCTOR!</h1>
          <h1 className='text-lg text text-center italic'>Best online appointment scheduling platform</h1>
          <div className='flex justify-center mt-4 '>
            <Link to={'/appointments'} ><button className='bg-button hover:bg-buttonHover text-white  rounded-md py-1 px-2'>Book an Appointment</button></Link>
          </div>
          <div className='flex gap-20 m-auto justify-center  mt-10 h-[140px] w-[140px] '>
            <img src={img1} alt='' className='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
          </div>
        </div>

        <div className=" w-11/12 m-auto rounded-lg  h-fit shadow-sm font-raleway ">
          <p className='text-center text-text mt-4 text-2xl font-bold'>What We Do</p>
          <Slider {...settings} className='p-2'>
            {data.map((d, index) => (
              <div key={index} className="text-center" >
                <div className=''>
                  <h2 className="text-xl font-bold text-primary">{d.title}</h2>
                </div>
                <div>
                  <p className="text-sm mt-1 text-gray-600">{d.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Dashboard