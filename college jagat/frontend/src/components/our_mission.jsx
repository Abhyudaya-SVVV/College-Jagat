import React, { useState, useEffect } from 'react'
import '../style/our_mission.scss'

const our_mission = () => {
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
    <div className="our-mission">
    <div className="our-mission-heading">
        <div className="om-line"></div>
        <div className="om-head">Our Mission</div>
    </div>
    <div className="our-mission-content">
        <div className="om-left">

            {data &&
              data.length > 0 &&
              data.map((val) => {
                return <p key={val.id}>{val.our_mission.p}</p>;
              })}
        </div>
        <div className="om-right">
        <img src={"../assets/mission.svg"} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default our_mission
