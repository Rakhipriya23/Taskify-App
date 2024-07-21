/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import {FaFacebook} from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>Taskify</h1>
         
          <p>
          Stay productive and in control.
Organize your tasks effortlessly.<br/>
Your ultimate to-do list app awaits!
          </p>
          <div className="footer-social-icons">
            <FaFacebook /> &nbsp;
            <FaTwitter/> &nbsp;
            <FaLinkedin/>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-7978123456</li>
            <li>contact@taskify.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        Copyright 2024 @Taskify.com-All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
