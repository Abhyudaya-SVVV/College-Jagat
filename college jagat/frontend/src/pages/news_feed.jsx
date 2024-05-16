import React, { useState, useEffect } from "react";
import "../style/news_feed.scss";
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(50); // Adjust scroll speed here (lower value means faster scroll)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json_data_file/news_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to continuously scroll news ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prevScrollPosition => prevScrollPosition + 1);
    }, scrollSpeed);

    return () => clearInterval(interval);
  }, [scrollSpeed]);

  return (
    <>
      <Navbar1 />
      <div className="news-feed">
        <div className="news-heading">
          <h1>NEWS FEED</h1>
        </div>
        <div className="news-ticker-container">
          <div className="news-ticker" style={{ marginTop: `-${scrollPosition}px` }}>
            {newsData.map((item, index) => (
              <div key={index} className="news-item">
                <p>{item.news}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsFeed;
