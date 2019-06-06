import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// The toggle and on props are used to control the active class that sets the background and font color for the theme.

const Header = ({ toggle, on }) => {
  return (
    <header className={on ? "headerContainerAlt" : "headerContainer"}>
      <Link className="headerTitle" to="/rest-countries">
        <h1 className="headerTitle">Where in the world?</h1>
      </Link>
      <input
        type="checkbox"
        id="toggle"
        className="offscreen"
        onClick={() => toggle()}
      />{" "}
      <label htmlFor="toggle" className="switch" />
    </header>
  );
};

export default Header;
