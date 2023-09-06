import React from 'react'
import '../styles/JobOpenings.css'
import jobBg from '../assets/job-search.jpeg'
import {jobList} from './jobList'
import { Link, useNavigate } from 'react-router-dom'


function JobOpenings() {

        const navigate = useNavigate()
        function showjobs(id){
            navigate(`/all-openings/${id}`)
        }

  return (
    <div className='job-openings' >




        <div className='job-search' >
            <div className='bg-img'>
                <img src={jobBg}/>
                <h1>Job Openings</h1>
            </div>
                <hr style={{ width: '100%',marginTop: '70px',borderWidth: '2px', border: 'solid #052278', marginBottom: '30px' }} />



            <div className='job-container'>

            {jobList.map((jobList,i) => {
                return(
                    <div className='job-box' 
                    key={jobList.id} 
                    id={'grid' + (i + 1)}
                    onClick={() => showjobs(jobList.id)}>
                    <h1 className='job-title' >{jobList["jobTitle"]}</h1>
                    <h4 className='emp-name'> {jobList["empName"]}</h4>
                    <h4 className='location' > {jobList["Location"]} </h4>
                        <div className='pay-rate-cont'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.999,8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245,0.298-5,1.592-5,4.429c0,2.706,2.666,4.113,5,4.43V17.9 c-1.448-0.251-3-1.024-3-2.4h-2c0,2.589,2.425,4.119,5,4.436v1.063V22h2v-1.001V19.93c2.245-0.298,5-1.593,5-4.43 s-2.755-4.131-5-4.429V6.1C14.329,6.339,15.999,7.041,15.999,8.5z M7.999,8.5c0-1.459,1.67-2.161,3-2.4v4.799 C9.628,10.646,7.999,9.897,7.999,8.5z M15.999,15.5c0,1.459-1.67,2.161-3,2.4V13.1C14.329,13.339,15.999,14.041,15.999,15.5z"></path></svg>
                            <p className='pay-rate' >{jobList["payRate"]}</p>
                        </div> 
                        <div className='job-type-cont'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clip-rule="evenodd"></path></svg>
                            <p className='job-type'>{jobList["jobType"]} </p>
                        </div>

                    
                    <p className='job-desc' > {jobList["jobDesc"]}  </p>
                </div>
                )
                
            })}

                
            </div>
        </div>
    </div>
  )
}

export default JobOpenings