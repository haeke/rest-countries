import React from "react";
import PropTypes from "prop-types";
// The defaultSelect prop is the name of the select before a user clicks on the drop down. The options array is the list of options that you want a user to choose from. The handleSelect method will make a request from the restcountries API.

import "./CountrySelect.css";

const CountrySelect = ({ defaultSelect, handleSelect, options, on }) => {
  return (
    <select
      className={on ? "countrySelectAlt" : "countrySelect"}
      name="regions"
      id="region"
      onChange={handleSelect}
      defaultValue={defaultSelect}
    >
      <option value={defaultSelect} disabled>
        {defaultSelect}
      </option>
      {options.map(optionName => (
        <option key={optionName} value={optionName}>
          {optionName}
        </option>
      ))}
    </select>
  );
};

CountrySelect.propTypes = {
  defaultSelect: PropTypes.string,
  options: PropTypes.array,
  on: PropTypes.bool
};

export default CountrySelect;
