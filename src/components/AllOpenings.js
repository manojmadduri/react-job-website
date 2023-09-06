// import React from 'react'
import React, { useState } from 'react';
import '../styles/AllOpenings.css'
import {jobList} from './jobList'; // Import your movie data
import { useParams } from 'react-router-dom'; // Import useParams

function AllOpenings() {

    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      // Add more form fields as needed
    });
  
    const handleApplyNowClick = () => {
      setIsPopUpVisible(true);
    };
  
    const handleFormInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Access form data from the `formData` state
      const formDataToSubmit = {
        name: formData.name,
        email: formData.email,
        // Add more form fields as needed
      };
  
      // Perform the form submission logic
      // ...
  
      // After submission, you can close the pop-up
      setIsPopUpVisible(false);
    };
  
    // ... your component JSX ...
  
// -------------  
    const { id } = useParams();

    // Find the movie details in the List data using the movie ID
    const jobDetail = jobList.find(jobList => jobList.id === parseInt(id, 10));
  
    if (!jobDetail) {
      // Handle the case where the movie with the given ID is not found
      return <div>Movie not found</div>;
    }
  return (
    <div className='all-openings' >
        <div className='all-job-container'>
            <div className='all-jobs-top'>
                <div className='top-left'>
                    <h2>{jobDetail.jobTitle}</h2>
                    <h4 className='empName' >{jobDetail.empName}</h4>
                </div>
                <div className='top-right'>
                    <button onClick={handleApplyNowClick} >Apply Now</button>
                </div>
            </div>
        </div>

        <div className='bottom-desc'>
            <div className='main-desc'>
              <div className='bottom-desc-left'>
                    <h2>DESCRIPTION</h2>
                    <span  >{jobDetail.jobDesc}</span>
                    <h2>BASIC QUALIFICATIONS</h2>
                    <ul>
                    <li> {jobDetail.Qualifications[0]}</li>
                    <li>{jobDetail.Qualifications[1]}</li>
                    <li>{jobDetail.Qualifications[2]}</li>
                    <li>{jobDetail.Qualifications[3]}</li>
                    <li>{jobDetail.Qualifications[4]}</li>
                    
                    </ul>
                    <h2>PREFERRED QUALIFICATIONS</h2>
                    <ul>
                        <li>Passion for Operational Excellence</li>
                        <li>Experience in AWS technologies related to Big Data applications</li>
                        <li>Experience in working in multi-tiered and highly scalable software services</li>
                        <li>Good understanding of CI/CD and automation practices</li>
                    </ul>

                    <span>Amazon is an equal opportunities employer. We believe passionately that employing a diverse workforce is central to our success. We make recruiting decisions based on your experience and skills. We value your passion to discover, invent, simplify and build. Protecting your privacy and the security of your data is a longstanding top priority for Amazon. Please consult our Privacy Notice (https://www.amazon.jobs/en/privacy_page) to know more about how we collect, use and transfer the personal data of our candidates.</span>
                    
              </div>
              <div className='bottom-desc-right'>
                <h2>Job details</h2>
                <hr></hr>
                < div className='location-details'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"></path></svg>
                    <p>{jobDetail.Location}</p>
                </div>
                <div className='pay-rate-details'>
                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z" fill="currentColor"></path></svg>
                    <p>{jobDetail.payRate}</p>
                </div>
                <div className='work-type-details'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.5 3h-11a.5.5 0 00-.5.5V11h12V3.5a.5.5 0 00-.5-.5zm-11-1A1.5 1.5 0 001 3.5V12h14V3.5A1.5 1.5 0 0013.5 2h-11z" clip-rule="evenodd"></path><path d="M0 12h16v.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5V12z"></path></svg>
                    <p>{jobDetail.worktype}</p>
                </div>
              </div>
                
            </div>
        </div>

        {/* Pop-up window */}
      {isPopUpVisible && (
        <div className='popup-container'>
          <div className='popup'>
            <h3>Application Form</h3>
            <form action="https://formsubmit.co/65773ca424e6292e655d4126dc76505a" method="POST" enctype="multipart/form-data">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormInputChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormInputChange}
                  required
                />
              </label>
              {/* Add more form fields as needed */}
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setIsPopUpVisible(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AllOpenings