import React from "react";
import PropTypes from "prop-types";

// This is a controlled input component, the name and value need to be passed along with the handleChange function.

const CountryInput = ({
  className,
  name,
  value,
  placeholder,
  handleChange
}) => {
  return (
    <input
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

CountryInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default CountryInput;
