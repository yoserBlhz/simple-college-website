import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure a better education for a better world</h1>
            <p>At Edusity, we believe that quality education is the cornerstone of a brighter future. Our platform is dedicated to providing accessible, innovative, and personalized learning experiences for students of all ages. With a diverse range of courses and expert instructors, we empower learners to reach their full potential and contribute to a better world. Join us at Edusity, and take the first step towards achieving your educational goals and making a positive impact on society.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""/> </button>
        </div>
    </div>
  )
}

export default Hero