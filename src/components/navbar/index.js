import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/logo.svg").default} alt="logo" />{" "}
          <h2
            style={{
              color: "#174ea6",
              position: "absolute",
              left: "80px",
              fontWeight: "600",
            }}
            className="text"
          >
            ShopNPay
          </h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Us
          </NavLink>
          <NavLink to="/blog" activeStyle>
            Blog
          </NavLink>
          <NavLink to="/hiring" activeStyle>
            Hiring
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>

          <NavLink to="/scanner" activeStyle>
            QR Page
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
