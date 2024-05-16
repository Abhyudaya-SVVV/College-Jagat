import React, { useState, useEffect } from "react";
import "../style/lost_and_found.scss";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";

const lost_and_found = () => {
  const [formData, setFormData] = useState({
    name: "",
    program: "",
    branch: "",
    phoneNumber: "",
    details: "",
    place: "",
    password: "",
    status: "", // Added status field for lost/found selection
  });

  const [lostAndFoundData, setLostAndFoundData] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [deletePassword, setDeletePassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false); // Added state to track password match

  useEffect(() => {
    const storedData = localStorage.getItem("lostAndFoundData");
    if (storedData) {
      setLostAndFoundData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (
      !formData.name ||
      !formData.program ||
      !formData.branch ||
      !formData.phoneNumber ||
      !formData.details ||
      !formData.place ||
      !formData.password
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const updatedData = [...lostAndFoundData, formData];
    setLostAndFoundData(updatedData);
    localStorage.setItem("lostAndFoundData", JSON.stringify(updatedData));

    setFormData({
      name: "",
      program: "",
      branch: "",
      phoneNumber: "",
      details: "",
      place: "",
      password: "",
      status: "",
    });
  };

  const handleDelete = () => {
    const itemToDelete = lostAndFoundData[deleteIndex];
    if (itemToDelete.password !== deletePassword) {
      alert("Password mismatch. Cannot delete entry.");
      return;
    }
    const newData = [...lostAndFoundData];
    newData.splice(deleteIndex, 1);
    setLostAndFoundData(newData);
    localStorage.setItem("lostAndFoundData", JSON.stringify(newData));
    setDeleteIndex(-1);
    setDeletePassword("");
  };

  return (
    <>
      <Navbar1 />
      <div className="lost-found">
        <div className="lf-heading">
          <h1>Lost and Found</h1>
        </div>
        <div className="lost-and-found">
          <div className="form-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="program">Program:</label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
            />
            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            />
            <label htmlFor="status">Status:</label> {/* Added status field */}
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <label htmlFor="details">Lost/Found Project Detail:</label>
            <input
              type="text"
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
            <label htmlFor="place">Lost/Found Place:</label>
            <select
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Room">Room</option>
              <option value="Campus">Campus</option>
              <option value="Cafeteria">Cafeteria</option>
            </select>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button id="add-detail-btn" onClick={handleAdd}>
              Add
            </button>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Program</th>
                  <th>Branch</th>
                  <th>Status</th>
                  <th>Phone Number</th>
                  <th>Details</th>
                  <th>Place</th>
                  {/* <th>Password</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lostAndFoundData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.program}</td>
                    <td>{item.branch}</td>
                    <td>{item.status}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.details}</td>
                    <td>{item.place}</td>
                    {/* <td>{item.password}</td> */}
                    <td>
                      <button
                        id="add-detail-btn"
                        onClick={() => {
                          setDeleteIndex(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {deleteIndex !== -1 && (
            <div className="delete-modal">
              <input
                type="password"
                placeholder="Enter password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
              />
              <button onClick={handleDelete}>Confirm Delete</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default lost_and_found;
