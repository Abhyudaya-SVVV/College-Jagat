import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Hero from './components/hero';
import About_cj from './components/about_college_jagat';
import About_abhyudaya from './components/about_abhyudaya';
import Academic_calender from './pages/academic_calender';
import News_feed from './pages/news_feed';
import Bus_board from './pages/bus_board';
import Clubs_and_events from './pages/clubs_and_events';
import Lost_and_found from './pages/lost_and_found';
import Calculate_attendance from './pages/calculate_attendance';
import Feedback_form from './pages/feedback_form';
import Community_chat from './pages/community_chat';
import Contact_us_page from './pages/contact_us_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/academiccalender",
        element: <Academic_calender />,
      },
      {
        path: "/newsfeed",
        element: <News_feed />,
      },
      {
        path: "/busboard",
        element: <Bus_board />,
      },
      {
        path: "/events",
        element: <Clubs_and_events />,
      },
      {
        path: "/lostandfound",
        element: <Lost_and_found />,
      },
      {
        path: "/attendancecalc",
        element: <Calculate_attendance />,
      },
      {
        path: "/feedbackform",
        element: <Feedback_form />,
      },
      {
        path: "/aboutabhyudaya",
        element: <About_abhyudaya />,
      },
      {
        path: "/contactus",
        element: <Contact_us_page />,
      },
      {
        path: "/communitychat",
        element: <Community_chat />,
      },
    ],
  },
]);

export default router;
