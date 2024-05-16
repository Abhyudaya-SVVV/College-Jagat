import React from "react";
import "../style/community_chat.scss";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
const community_chat = () => {
  return (
    <>
      <Navbar1 />
      <div className="comm-chat">
        <div className="cc-heading">
          <h1>Community Chat</h1>
        </div>
        <div className="cc-wrapper">
          <p>
            <span> 👷 Under Construction 👨‍💻</span> <br /> We're sorry, but this page is currently under
            construction and not yet ready for viewing. We are working hard to
            bring you the best experience possible. Please check back soon for
            updates, or explore the rest of our website in the meantime. <br /> <span id="tq-sp"> 😊 Thank you for your patience!</span> 
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default community_chat;
