import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer">  
        <div className="footer-item1">
          <p>Contact Us</p>
          <p>Terms Of Use</p>
        </div>
        <div className="footer-item2">
          <i className="fa-brands fa-youtube style={{color: 'black'}}"></i>
          <i className="fa-brands fa-instagram style={{color: 'black'}}"></i>
          <i className="fa-brands fa-facebook style={{color: 'black'}}"></i>
          <i className="fa-brands fa-linkedin style={{color: 'black'}}"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
