import React from 'react'
import '../styles/GetHired.css'
import hiredimg1 from '../assets/pexels-photo-5816293-1920w.jpg'
import javapng from '../assets/java.png'
import {typeOfJobs} from './types-jobs'
import { Link, useNavigate } from 'react-router-dom'


function GetHired() {

    const navigate = useNavigate()


    function showJob(id){
    navigate(`/job-opinings`)
     
    }
  return (
    <div className='get-hired' >
        <div className='hired-page1'>
            <h1>CANDIDATES</h1>
            <hr style={{ width: '250px', borderWidth: '2px', border: 'solid black', marginBottom: '30px' }} />
            <div className='hired-page1-content'>
                <img src={hiredimg1}/>
                <p>If you interested in applying with us and having access to a variety of different opportunities in different industries; look no further! At Jayce Grayye Consulting & Recruiting connects Top-Tier Professionals with clients primarily in the digital space & technology space. Aligning with clients who are growing & providing exceptional opportunities has led to significant growth with our company with lots of clients in the pipeline for 2021! Our goal is to find you an organization to grow within & earn a great income potential. Most of our roles are remote & you can work from anywhere!</p>
            </div>
        </div>

        <div className='featured-jobs'>
            <div className='featured-title'>
                <h1>Featured Jobs</h1>
                <hr style={{ width: '250px', borderWidth: '2px', border: 'solid black', marginBottom: '30px' }} />
            </div>
            
            <div className='grid-container-jobs'>

                {typeOfJobs.map((list,i) => {
                    return(
                        <div  key={list.id}
                        id={'grid' + (i + 1)}  
                        className='type-of-jobs' 
                        onClick={() => showJob(list.id)}>
                        <img src={list["image"]}/>
                        <h1>{list["jobTitle"]}</h1>
                        <p>{list["jobdetail"]}</p>
                        </div>

                    )
                })}
                
                
            
                
            </div>

        </div>

        <div className='how-we-hire'>
            <h1>How We Work</h1>

            <div className='grid-hire'>
                <div className='hire-process-img'>
                    <p>1.</p>
                    <h4>SPEAK WITH A RECRUITER</h4>
                    <span>Schedule a call with one of our highly qualified recruiters to discuss your career goals.</span>
                </div>
                <div className='hire-process-img'>
                    <p>2.</p>
                    <h4>GET MATCHED</h4>
                    <span>Your recruiter will get you matched with reputable companies and help you prepare your resume to qualify you for top positions.</span>
                </div>
                <div className='hire-process-img'>
                    <p>3.</p>
                    <h4>PREPARE</h4>
                    <span>Prepare for your interview by learning about the new company and how to position yourself as a rockstar in your field.</span>
                </div>
                <div className='hire-process-img'>
                    <p>4.</p>
                    <h4>INTERVIEW</h4>
                    <span>Sell your skills and master your interview to move on to the next stage of the hiring process.</span>
                </div>
                <div className='hire-process-img'>
                    <p>5.</p>
                    <h4>GET HIRED</h4>
                    <span>Have your pick of some of the best sales careers and get started with your new position.</span>
                </div>
            </div>

            <Link to={'/job-opinings'}>Check out our job Board</Link>
            
        </div>
    </div>
)
}

export default GetHired