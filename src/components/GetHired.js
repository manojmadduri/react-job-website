import React from 'react'
import '../styles/GetHired.css'

function GetHired() {

    const changeColor = (event) => {
        console.log("HERE");
        let k = event.currentTarget.id
        console.log("Hello ",k);
        let p = document.querySelectorAll('.job1'),i
        // let p = document.getElementsByClassName('job1')
        console.log(p);
        for( i=0; i<p.length;i++){
            p[i].classList.remove('active')
        }

        document.getElementById(k).classList.add('active')

        let title = document.querySelector('.title')
        let descr = document.querySelector('.descr')
        let pay = document.querySelector('.pay')
        let staff = document.querySelector('.staff')
        let connection = document.querySelector('.connection')
        let applicant = document.querySelector('.applicant')
        let skills = document.querySelector('.skills')
        if(k=='box1'){
            title.innerHTML = "Java Full Stack Developer";
            descr.innerHTML = "Experis · Charlotte, NC (Hybrid)";
            pay.innerHTML = "$65/hr - $70/hr (from job description) · Contract · Entry level";
            staff.innerHTML = "10,001+ employees · Staffing and Recruiting"
            connection.innerHTML = "2 connections work here";
            applicant.innerHTML = "See how you compare to 41 applicants.";
            skills.innerHTML = "Skills: Kafka, Java, Bootstrap, Angular, AWS, Git"
            

        }else if(k =='box2'){
            title.innerHTML = "Java Developer";
            descr.innerHTML = "Matlen Silver · Pennington, NJ (Hybrid)";
            pay.innerHTML = "$56/hr · Contract";
            staff.innerHTML = "1,001-5,000 employees · IT Services and IT Consulting";
            connection.innerHTML = "1 connection works here ";
            applicant.innerHTML = "See how you compare to 313 applicants.";
            skills.innerHTML = "Skills Html, CSS, Java Script, Java 8 and 11"
        }
        else if(k =='box3'){
            title.innerHTML = "Job 3";
            descr.innerHTML = "Descr 3";
            pay.innerHTML = "pay 3";
            staff.innerHTML = "staff 3";
            connection.innerHTML = "connection 1";
            applicant.innerHTML = "applicant 1";
            skills.innerHTML = "skills 1"
        }
        else if(k =='box4'){
            title.innerHTML = "Job 4";
            descr.innerHTML = "Descr 4";
            pay.innerHTML = "pay 4";
            staff.innerHTML = "staff 4";
            connection.innerHTML = "connection 1";
            applicant.innerHTML = "applicant 1";
            skills.innerHTML = "skills 1"

        }
        else if(k =='box5'){
            title.innerHTML = "Job 5";
            descr.innerHTML = "Descr 5";
            pay.innerHTML = "pay 5";
            staff.innerHTML = "staff 5";
            connection.innerHTML = "connection 1";
            applicant.innerHTML = "applicant 1";
            skills.innerHTML = "skills 1"

        }
        else if(k =='box6'){
            title.innerHTML = "Job 6";
            descr.innerHTML = "Descr 6";
            pay.innerHTML = "pay 6";
            staff.innerHTML = "staff 6";
            connection.innerHTML = "connection 1";
            applicant.innerHTML = "applicant 1";
            skills.innerHTML = "skills 1"

        }
        
    }
return (
    <div><div className="jobs-body">
    <div className="left-side">
        <div style={{width: '100%', height: '100%'}}>
            <div className="job-profile bg-primary">
                <p>Jobs based on your profile</p>
                <h6>124 Results</h6>
            </div>
            <div className="job1 active" id="box1" onClick={changeColor} >
                <h5>Java Full Stack Developer</h5>
            </div>
            <div className="job1" id="box2" onClick={changeColor}  >
                <h5>Java Developer</h5>
            </div>
            <div className="job1" id="box3" onClick={changeColor}  >
                <h5>Data Base Engineer</h5>
            </div>
            <div className="job1" id="box4" onClick={changeColor}  >
                <h5>Kafka Developer</h5>
            </div>
            <div className="job1" id="box5"onClick={changeColor}   >
                <h5>Java Full Stack Developer</h5>
            </div>
            <div className="job1" id="box6"onClick={changeColor} >
                <h5>Java Full Stack Developer</h5>
            </div>
        </div> 
        
    </div>
        <div className="right-side">
            <div className="mh-100" style={{width: '100%', height: '100%' }}>
            
                <h4 className="title fw-bold">Java Full Stack Developer</h4>
                <p className="descr">Experis · Charlotte, NC (Hybrid) </p>
                <div className="style">
                    <div className="rate_icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" clip-rule="evenodd"></path><path fillRule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="pay_rate style2">
                        <p className="pay">$65/hr - $70/hr (from job description) · Contract · Entry level</p>
                    </div>
                </div>
                <div className="pay style">
                    <div className="rate_icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"></path></svg>
                    </div>
                    <div className="pay_rate style2">
                        <p className="staff">10,001+ employees · Staffing and Recruiting</p>
                    </div>
                </div>
                <div className="pay style">
                    <div className="rate_icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="pay_rate style2">
                        <p className="connection">2 connections work here </p>
                    </div>
                </div>
                <div className="pay style">
                    <div className="rate_icon">
                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    <div className="pay_rate style2">
                        <p className="applicant">See how you compare to 41 applicants. </p>
                    </div>
                </div>
                <div className="pay style">
                    <div className="rate_icon">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M3.75 4.48h-.71L2 3.43l.71-.7.69.68L4.81 2l.71.71-1.77 1.77zM6.99 3h8v1h-8V3zm0 3h8v1h-8V6zm8 3h-8v1h8V9zm-8 3h8v1h-8v-1zM3.04 7.48h.71l1.77-1.77-.71-.7L3.4 6.42l-.69-.69-.71.71 1.04 1.04zm.71 3.01h-.71L2 9.45l.71-.71.69.69 1.41-1.42.71.71-1.77 1.77zm-.71 3.01h.71l1.77-1.77-.71-.71-1.41 1.42-.69-.69-.71.7 1.04 1.05z"></path></svg>
                    </div>
                    <div className="pay_rate style2">
                        <p className="skills">Skills: Kafka, Java, Bootstrap, Angular, AWS, Git</p>
                    </div>
                </div>

                <div className="about_the_job ">
                    <h4 className="fs-5 fw-bold">About the job</h4>
                    <p>Our client in Charlotte, NC is looking for hardworking, motivated (Backend) Java Developer to join their team.</p>
                    <p>What's in it for you?</p>
                    <ul>
                        <li>$65-$70/hr </li>
                        <li>Location - Charlotte, NC </li>
                        <li>Hybrid - 2-3 days onsite </li>
                        <li>Contract - 12 Months (possibility for extension or Full Time conversion) </li>
                    </ul>
                    <p className="fs-5 fw-bold">Job Description</p>
                        <ul>
                            <li>6+ years of Specialty Software Engineering experience. </li>
                            <li>Minimum 1-2 years of Web Development experience. </li>
                            <li>2+ years with one or more software development languages: Java - focus on Backend with heavy knowledge of Kafka. </li>
                            <li>Experience with one or more Testing Frameworks: (Selenium, JMeter, Blazemeter, Performance Center, Perfecto, Cucumber, Gherkin, ALM, Gremlin, Chaos Monkey, Chaos Toolkit, Simian Army, Toxi Proxy) 
                                2+ year of financial industry experience </li>
                        </ul>
                    <p className="fs-6 fw-bold">Due to client rules, all candidates must be able to work on Experis' W2 directly, we are unable to work with 3rd parties.</p>
                    <p>Are you Interested?</p>
                    <p>Share this job with friends and family and earn dollars with every successful hire.  </p>
                        
                    

                </div>
            </div>
        
        </div>
</div></div>
)
}

export default GetHired