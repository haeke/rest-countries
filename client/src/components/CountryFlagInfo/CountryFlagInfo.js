import React from "react";
import PropTypes from "prop-types";

// The className is passed to change the styling of the component div, the countryTitle and countryTitleClass control the text and style of the text it should be larger than the other text. The countryPopulation, countryRegion, countryCapital should all use the same class style.

const CountryFlagInfo = ({
  className,
  countryTitle,
  countryTitleClass,
  countryPopulation,
  countryTextClass,
  countryRegion,
  countryCapital
}) => {
  return (
    <div className={className}>
      <h1 className={countryTitleClass}>{countryTitle}</h1>
      <h1 className={countryTextClass}>Population: {countryPopulation}</h1>
      <h1 className={countryTextClass}>Region: {countryRegion}</h1>
      <h1 className={countryTextClass}>Capital: {countryCapital}</h1>
    </div>
  );
};

CountryFlagInfo.propTypes = {
  className: PropTypes.string,
  countryTitle: PropTypes.string,
  countryTitleClass: PropTypes.string,
  countryPopulation: PropTypes.number,
  countryTextClass: PropTypes.string,
  countyRegion: PropTypes.string,
  countryCapital: PropTypes.string
};

export default CountryFlagInfo;
