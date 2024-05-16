import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';
import '../style/academic_calender.scss'
import Loading from '../components/loading'; 

const academic_calender = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = [];
    const images = document.querySelectorAll('.pg img');

    images.forEach(image => {
      const imagePromise = new Promise(resolve => {
        image.onload = resolve;
        image.onerror = resolve;
      });
      imagePromises.push(imagePromise);
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch(error => {
        console.error('Image loading error:', error);
      });
  }, []);

  return (
    <>
      <Navbar1 />
      <div className="academic-cal">
        {!imagesLoaded && <Loading />}
        <div className="ac-heading">
          <div className="ac-head">
            <h1>ACADEMIC CALENDAR</h1>
          </div>
          <div className="ac-year">
            <h2>2023 - 2024</h2>
          </div>
        </div>
        <div className="ac-wrapper">
        <div className="pg">
                <img src={'../assets/ac1.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac2.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac3.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac4.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac5.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac6.jpg'} alt="" />
            </div>
            <div className="pg">
                <img src={'../assets/ac7.jpg'} alt="" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default academic_calender;
