import React from 'react'
import '../styles/Home.css'
import home_bg_image from '../assets/Woman-interviewing-older-man.jpg'
import { Link } from 'react-router-dom'
import bg2 from '../assets/Hiring-now-words.jpg'
import page3_img from '../assets/b_tov_QuirkyInterviewQuestions_170731.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='page1'>
        <div className='home-image'>
        {/* <img  className='home-bg-image' src={home_bg_image}/> */}
        </div>
          <div className='home-text'>
            <h1 className='heading'> IT Recruiters You Can Trust</h1>
            <p className='heading-intro' >Let us match you with the best IT professionals in the business. We look at the big picture, consider every detail, and find the perfect candidates for every client.</p>
            <Link className='looking-job'  to='/get-hired' >LOOKING FOR A DREAM JOB <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></Link>
            <Link className='looking-talent' to='/find-employees' >LOOKING FOR TALENT <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></Link>
          </div>
      </div>
      
      <div className='page2'>
        <div className='page2-left'>
          <div className='bg2'>
            <img src={bg2}/>
          </div>
        </div>
        <div className='page2-right'>
            <h3>Dream Jobs Made Simple</h3>
            <p>At Tattersall Recruiting Inc., our priority is matching you with the company that suits your professional goals, growth and happiness. Integrity, personal connection and deep knowledge in the field of medical sales means the stage is set for your success. We will coach you throughout the process so your job search can run flawlessly.</p>
            <Link className='contact-recuriter' to='/contact-us' >CONTACT A RECURITER <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></Link>

        </div>
        
      </div>

    <div className='page3'>
      <div className='page3-left'>
        <h1>Outstanding Salespeople, Fast</h1>
        <p>We get it. You need talented sales representatives, and you need them now. Why waste time posting positions and wading through piles of resumes from unqualified applicants? We work to present you with candidates with proven records in medical and pharmaceutical sales. A winning sales force means a great bottom line, and we’ll find it for you!</p>
            <Link className='button-emp' to='/find-employees' >FIND A EMPLOYEES<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg></Link>
      </div>
      <div className='page3-right'>
        <img src={page3_img}/>
      </div>
    </div>
      

    </div>
    
  )
}

export default Home