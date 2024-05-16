import React from 'react'
import '../style/hero.scss'
import Navbar from './navbar'
import About_college_jagat from './about_college_jagat'
import Our_mission from './our_mission'
import About_abhyudaya from './about_abhyudaya'
import Contact_us from './contact_us'
import Footer from './footer'
import Navbar1 from './navbar1'

const hero = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Navbar1 />
    <div className="hero">
        <div className="hero-left-side">
            <h1>COLLEGE <span>JAGAT</span></h1>
            <h2>Connecting Campuses, Empowering Minds</h2>
            <p>Welcome to College Jagat, your ultimate destination for all things college-related! Developed by Abhyudaya, the coding club of SVVV (Shri Vaishnav Vidyapeeth Vishwavidyalaya), we are dedicated to providing a comprehensive and insightful platform that caters to the diverse needs of college students and enthusiasts.</p>
        </div>
        <div className="hero-right-side">
            <img src={'../assets/heroimg.svg'} alt="" />
        </div>
    </div>
    <About_college_jagat />
    <Our_mission />
    <About_abhyudaya />
    <Contact_us />
    <Footer />
    </>
  )
}

export default hero
