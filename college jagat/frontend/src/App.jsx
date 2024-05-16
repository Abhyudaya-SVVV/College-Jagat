import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero';
import About_college_jagat from './components/about_college_jagat';
import About_abhyudaya from './components/about_abhyudaya';
import Contact_us from './components/contact_us';
import Academic_calender from './pages/academic_calender';
import News_feed from './pages/news_feed';
import Bus_board from './pages/bus_board';
import Clubs_and_events from './pages/clubs_and_events';
import Lost_and_found from './pages/lost_and_found';
import Calculate_attendance from './pages/calculate_attendance';
import Feedback_form from './pages/feedback_form';
import Community_chat from './pages/community_chat';
import Contact_us_page from './pages/contact_us_page';


function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <About_college_jagat /> */}
      {/* <Academic_calender /> */}
      {/* <News_feed /> */}
      {/* <Bus_board /> */}
      {/* <Clubs_and_events /> */}
      {/* <Lost_and_found /> */}
      {/* <Calculate_attendance /> */}
      {/* <Feedback_form /> */}
      




      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Hero />} />

            <Route path="academiccalender" element={<Academic_calender />} />

            <Route path="newsfeed" element={<News_feed />} />

            <Route path="busboard" element={<Bus_board />} />

            <Route path="events" element={<Clubs_and_events />} />

            <Route path="lostandfound" element={<Lost_and_found />} />

            <Route path="attendancecalc" element={<Calculate_attendance />} />

            <Route path="feedbackform" element={<Feedback_form />} />

            <Route path="aboutabhyudaya" element={<About_abhyudaya />} />

            <Route path="contactus" element={<Contact_us_page />} />

            <Route path="communitychat" element={<Community_chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
