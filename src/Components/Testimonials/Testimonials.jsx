import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

 

function Testimonials() {
    const slider=useRef();
    let tx= 0;
    const slideForward=()=>{
        if(tx>-50){
            tx -=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward=()=>{
        if(tx<0){
            tx +=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Maria Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Attending this university has been a transformative experience for me. The professors are incredibly knowledgeable and supportive, and the diverse range of courses allowed me to explore my interests and discover my true passion. I've grown not just academically, but also personally, and I'm confident that the skills I've gained here will serve me well in my future career.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Wiliam Mia</h3>
                                <span>Edusity, Spain</span>
                            </div>
                        </div>
                        <p>Choosing this university was one of the best decisions I've ever made. The campus is vibrant and welcoming, and there's always something exciting happening. The hands-on learning opportunities and internships provided me with real-world experience that I couldn't get anywhere else. I've made lifelong friends and mentors who have guided me every step of the way.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Rose Saint</h3>
                                <span>Edusity, France</span>
                            </div>
                        </div>
                        <p>As an international student, I was initially nervous about studying abroad, but this university made me feel at home right away. The diverse community and inclusive environment allowed me to share my culture and learn from others. The academic resources and career services are top-notch, helping me secure a fantastic job even before graduation. I'm proud to be an alumnus of this incredible institution.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Emilio Pierre</h3>
                                <span>Edusity, Mexico</span>
                            </div>
                        </div>
                        <p>This university has exceeded all my expectations. The sense of community and belonging here is incredible. The interdisciplinary approach to education has allowed me to combine my interests in unexpected ways, leading to unique research opportunities and projects. The support from faculty and peers has been instrumental in my personal and professional development. I couldn't have asked for a better place to pursue my education.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials