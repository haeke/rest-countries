import React from "react";

import "./Header.css";

const Header = ({ toggle }) => {
  return (
    <header className="headerContainer">
      <h1 className="headerTitle">Where in the world?</h1>
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
