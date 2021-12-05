import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded } from "@material-ui/icons";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import ResumeData from "../../utils/resumeDate";
import CustomButton from "../Button/Button";
import { Telegram } from "@material-ui/icons";
import "./Header.css";
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink, useLocation } from "react-router-dom";
// import { withRouter } from "react-router";
// import { BrowserRouter as withRouter } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Navbar sticky="top" expand="lg"  className="header">
      {/* Home link */}
      <NavLink to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </NavLink>

      <NavbarToggle />
      <Navbar.Collapse className="navbar_collapse">
        {/* Resume Link */}
        <Nav className="header_left">
          <NavLink
            to="/"
            className={pathName === "/" ? " header_link_active" : "header_link"}
          >
            Resume
          </NavLink>

          {/* Portfolio link */}

          <NavLink
            to="/portfolio"
            className={
              pathName === "/portfolio" ? " header_link_active" : "header_link"
            }
          >
            Portfolio
          </NavLink>
        </Nav>

        <div className="header_right">
          {Object.keys(ResumeData.socials).map((key) => (
            <a href={ResumeData.socials[key].link}>
              {ResumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton icon={<Telegram />} text={"Hire Me"} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
