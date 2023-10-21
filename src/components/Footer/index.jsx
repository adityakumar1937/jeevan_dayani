import React from "react";
import "./style.scss";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import Logo from "../Assets/Images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="tax-exemption">
        <h4>
          All the donations to Narayan Seva Sansthan are tax exempted under 80G
          of the Indian Income Tax Act
        </h4>
        <h5>Charity Id: AAATN4183F</h5>
      </div>
      <div className="footer-container">
        <div className="intro">
          <img src={Logo} alt="Jeevan Dayani Logo" />
          <p>
            The Akshaya Patra Foundation is a non profit organisation that
            strives to eliminate classroom hunger by implementing the Mid Day
            Meal Programme
          </p>

          <div className="social-icon">
            <ul>
              <li className="social-link">
                <AiOutlineInstagram
                  style={{ color: "#F60A5F" }}
                  size="24px"
                  className="icon"
                />
              </li>
              <li className="social-link">
                <AiFillFacebook
                  style={{ color: "#1877F2" }}
                  size="24px"
                  className="icon"
                />
              </li>
              <li className="social-link">
                <AiFillLinkedin
                  style={{ color: "#0A66C2" }}
                  size="24px"
                  className="icon"
                />
              </li>
              <li className="social-link">
                <AiFillYoutube
                  style={{ color: "#FF0000" }}
                  size="24px"
                  className="icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="quick-links">
            <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
            <li>
              <a href="#">New & Stories</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="contact-address">
        <h4>Contact Address</h4>
          <ul>
            <li>Narayan Seva Sansthan</li>
            <li>Narayan Seva Sansthan</li>
            <li>Hiran Magri, Sector -4,</li>
            <li>Udaipur (Rajasthan) - 313001</li>
            <li>INDIA</li>
          </ul>
        </div>
        <div className="contact-details">
        <h4>Quick Links</h4>
          <ul>
            <li className="icon-list-item">
              <MdEmail className="icon" style={{ color: "grey" }} size="24px" />
              <a href="mailto:">email@example.com</a>
            </li>
            <li className="icon-list-item">
              <MdPhone className="icon" style={{ color: "grey" }} size="24px" />
              <a href="tel:+">+91 1234567890</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
