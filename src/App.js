import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import AboutUs  from './components/AboutUs.js';
import GetHired from './components/GetHired.js';
import FindEmployees from './components/FindEmployees.js';
import Testimonials from './components/Testimonials.js';
import JobOpenings from './components/JobOpenings.js';
import ContactUs from './components/ContactUs.js';

 
function App(){
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/home' Component={Home}></Route>
          <Route path='/about-us' Component={AboutUs}></Route>
          <Route path='/get-hired' Component={GetHired}></Route>
          <Route path='/find-employees' Component={FindEmployees}></Route>
          <Route path='testimonials' Component={Testimonials}></Route>
          <Route path='job-opeinings' Component={JobOpenings}></Route>
          <Route path='contact-us' Component={ContactUs}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
