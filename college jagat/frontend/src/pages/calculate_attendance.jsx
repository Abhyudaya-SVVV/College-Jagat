import React, { useState } from "react";
import "../style/calculate_attendance.scss";
import Navbar1 from '../components/navbar1'
import Footer from '../components/footer'

const CalculateAttendance = () => {
  const [totalDays, setTotalDays] = useState(0);
  const [presentDays, setPresentDays] = useState(0);
  const [attendancePercentage, setAttendancePercentage] = useState(0);

  const handleCalculate = () => {
    if (totalDays > 0 && presentDays >= 0) {
      const absentDays = totalDays - presentDays;
      const totalAttendance = (presentDays / totalDays) * 100;
      setAttendancePercentage(totalAttendance);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="attendance-calc">
        <div className="a-calc-heading">
          <h1>Attendance Calculator</h1>
        </div>
        <div id="calc-container">
          <label>
            Total Days :
            <input
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <label>
            Present Days :
            <input
              type="number"
              value={presentDays}
              onChange={(e) => setPresentDays(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <button id="calc-btn" onClick={handleCalculate}>
            Calculate
          </button>
          <br />
          <p>Attendance Percentage: {attendancePercentage.toFixed(2)}%</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CalculateAttendance;
