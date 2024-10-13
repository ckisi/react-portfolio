import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key="aboutMe" className="nav-link text-light" to="/aboutMe">
          About Me
        </Link>,
        <Link key="portfolio" className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key="contact" className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key="resume" className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
