import React from 'react'
import {Link} from 'react-router-dom'

import p2i1 from '../assets/pexels-photo-5989930.jpg'
import "../styles/AboutUs.css"
import pg3img1 from '../assets/page-3-1.jpg'
import pg3img2 from '../assets/page-3-2.jpg'
import pg3img3 from '../assets/page-3-3.jpg'
import pg3img4 from '../assets/page-3-4.jpg'
import pg3img5 from '../assets/page-3-5.jpg'
import pg3img6 from '../assets/Retail-image-web-3-400x301-1920w.png'
import pg3img7 from '../assets/pexels-photo-7681840-1920w.jpg'
import pg3img8 from '../assets/pexels-photo-1595391-1920w.jpg' 
// import pg3img6 from '../assets/page-3-6.jpg'

function AboutUs() {
  return (
    <div className='about-us' >
        <div className='about-page1'>
          <div className='about-page1-content'>
            <h4>About TATTERSALL RECRUITING</h4>
            <h1>Where It All Began</h1>
            <p>About TATTERSALL RECRUITING Where It All Began At Tattersall Recruiting, our goal will always be simple: we will listen to your story, find out what you’re looking for, and match you with people that fit your dreams and make that story even better.
            </p>
            <Link className='button-link' to='/contact-us'>CONTACT US</Link>
          </div>
        </div>
        <div className='about-page2'>
          <div className='about-page2-title'>
            <h1>WHY US</h1>
          <hr style={{ width: '100px', borderWidth: '2px', border: 'solid black', marginBottom: '30px' }} />

          </div>
          <div className='about-page2-content'>
            <div className='about-page2-left'>
              <img src={p2i1}/>
            </div>
              <div className='about-page2-right'>
                <p>Jayce Grayye Consulting & Recruiting is a full-service recruitment firm specializing in various industries, including digital marketing, software, construction & more. </p>
                <p>Our unique approach combines strategic candidate outreach, A.I sourcing, targeted job ads & our expansive network brings in elite talent for your business. Our series of interviews & assessments done by our job recruiters filters only the best talent.</p>
                <p>Combining technology and a lower-cost infrastructure has allowed us to offer more competitive pricing than traditional recruitment firms while achieving a higher stratified end-user (client) service.</p>
              </div>
          </div>
      </div>
      <div className='about-page3'>
        <div className='about-page3-content'>
          <h1>WE FILL UP VACANCIES WITHIN A WEEK</h1>
          <hr style={{ width: '300px', borderWidth: '2px', border: 'solid black', marginBottom: '30px' }} />
          <p>Businesses consider innumerable factors in finding and hiring the most suitable candidate to join their team. </p>
          <p>With the help of our in-depth consultations, we pinpoint individuals and personalities who are superb experts at growing businesses & generating revenue.</p>
        </div>
        <div className='page3-img-right'>
          <div className='page-3-image'>
            <img src={pg3img1}/>
            <img src={pg3img2}/>
            <img src={pg3img4}/>
            <img src={pg3img5}/>
          </div>
            <img className='pg3img3' src={pg3img3}/>

        </div>
      </div>

      <div className='about-page4'>
        <div className='about-page4-content'>
          <h1>3 REASONS TO WORK WITH US</h1>
          <hr/>
          <h3>SPEEDY DELIVERY</h3>
        </div>

        <div className='page4-img'>
          <div className='top-img'>
            <div className='left-img'>
              <img src={pg3img6}/>
              <p>We place the top 3% of talents 2-5 times faster than our competitors. </p>
            </div>
            <div className='right-img'>
            <img src={pg3img7}/>
            <p>We have a 99% placement rate.</p>
            </div>

          </div>
          <div className='bottem-img'>
            <img src={pg3img8}/>
            <p>Our A-player-production process allows us to weed out the unqualified fit, so you don't have to waste hundreds of hours looking for a possible fit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs