import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import "../../components/Navbar/style.scss";
import CallToAction from "../shared/CTA";
import { FaRupeeSign, FaUserAlt } from "react-icons/fa";
import Logo from "/Images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="social-icon">
        <ul>
          <li className="social-link">
            <AiOutlineInstagram style={{ color: "#F60A5F" }} size="24px" />
          </li>
          <li className="social-link">
            <AiFillFacebook style={{ color: "#1877F2" }} size="24px" />
          </li>
          <li className="social-link">
            <AiFillLinkedin style={{ color: "#0A66C2" }} size="24px" />
          </li>
          <li className="social-link">
            <AiFillYoutube style={{ color: "#FF0000" }} size="24px" />
          </li>
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

      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="nav-menu">
          <li className="nav-items">Who We Are</li>
          <li className="nav-items">What We Do</li>
          <li className="nav-items">Causes</li>
          <li className="nav-items">Contact Us</li>
        </ul>

        <div className="nav-cta">
          <CallToAction text="Donate" icon={<FaRupeeSign />}/>
          <CallToAction text="Sign Up" icon={<FaUserAlt />}/>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
