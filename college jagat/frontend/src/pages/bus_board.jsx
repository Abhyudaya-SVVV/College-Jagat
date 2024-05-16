import React, { useState, useEffect } from "react";
import "../style/bus_board.scss";
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'

const bus_board = () => {
  const [busData, setbusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/json_data_file/bus_data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setbusData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar1 />
    <div className="bus-board">
      <div className="bus-b-heading">
        <h1>Bus Shedule</h1>
      </div>
      <div className="b-table-container">
        <table className="bus-table">
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Bus Route</th>
            </tr>
          </thead>
          <tbody>
            {busData.map((item, index) => (
              <tr key={index}>
                <td>{item.bus_no}</td>
                <td className="bus-route-cell">{item.bus_route}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default bus_board;
