import React, { useState, useEffect } from 'react'
import '../style/about_abhyudaya.scss'

const about_abhyudaya = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("/json_data_file/landing_site_data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        setData(myjson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="about-abhyudaya">
    <div className="about-abhyudaya-heading">
        <div className="aa-line"></div>
        <div className="aa-head">
            <div className="aa-head-h1"><h1>About Abhyudaya</h1><a href="https://www.instagram.com/abhyudayacodingclub/"><i class='bx bx-link-external'></i></a></div>
            <div className="aa-head-p">Official coding club of SVVV</div>
        </div>
    </div>
    <div className="about-abhyudaya-content">
        <div className="aa-left">

            {data &&
              data.length > 0 &&
              data.map((val) => {
                return <p key={val.id}>{val.about_abhyudaya.p}</p>;
              })}
        </div>
        <div className="aa-right">
        <img src={"../assets/abhyudayalogo.png"} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default about_abhyudaya
