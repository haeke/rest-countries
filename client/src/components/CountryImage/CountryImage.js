import React from "react";
import PropTypes from "prop-types";

const CountryImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

CountryImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default CountryImage;
