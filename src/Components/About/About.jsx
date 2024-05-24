import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


function About({setPlayState}) {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        </div>

        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>At our university, we are dedicated to shaping the leaders of the future. Our innovative programs and state-of-the-art facilities provide students with the knowledge and skills they need to excel in their chosen fields. Our experienced faculty members are committed to delivering a high-quality education that inspires critical thinking, creativity, and leadership.</p>
            <p>We believe that every student has the potential to make a significant impact on the world. Through our comprehensive curriculum and diverse extracurricular activities, we foster a supportive and challenging environment where students can thrive. Our community values collaboration, integrity, and excellence, ensuring that each student can reach their full potential.</p>
            <p>Join us and embark on a journey of academic and personal growth. Here, you will be equipped with the tools to succeed in a rapidly changing world and become a leader who can drive positive change. Your future starts now.</p>
       
        </div>


    </div>
  )
}

export default About