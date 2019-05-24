import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <h1>Where in the world?</h1>
      <input type="checkbox" id="toggle" className="offscreen" />{" "}
      <label for="toggle" className="switch" />
    </header>
  );
};

export default Header;
