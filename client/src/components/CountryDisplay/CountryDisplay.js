import React from "react";
import { Link } from "react-router-dom";

import "./CountryDisplay.css";

// Info to be displayed
// Country Name - country.name
// Native Name - country.nativeName
// Population - country.population
// Region - country.region
// Sub Region - country.subregion
// Capital - country.capital
// Top Level Domain - country.topLevelDomain
// Currencies - country.currencies ( an array )
// Languages - country.languages (an array)
// Border Countries - country.borders ( an array )

const CountryDisplay = ({ ...props }) => {
  const { country } = props.location.state;
  return (
    <section className="countryInfoContainer">
      <button className="backButton">
        <Link className="whiteText link" to="/">
          <i className="fas fa-arrow-left" />
          <span className="backLink">Back</span>
        </Link>
      </button>
      <div className="countryListing">
        <img
          className="countryDisplayImage"
          src={country.flag}
          alt={country.name}
        />
        <div className="countryInfo">
          <h1 className="countryName">{country.name}</h1>
          <h2 className="countryDisplayText">
            Native Name:{" "}
            <span className="countryDetailSpan">{country.nativeName}</span>
          </h2>
          <h2 className="countryDisplayText">
            Population:{" "}
            <span className="countryDetailSpan">{country.population}</span>
          </h2>
          <h2 className="countryDisplayText">
            Region: <span className="countryDetailSpan">{country.region}</span>
          </h2>
          <h2 className="countryDisplayText">
            Sub Region:{" "}
            <span className="countryDetailSpan">{country.subregion}</span>
          </h2>
          <h2 className="countryDisplayText">Capital: {country.capital}</h2>
          <h2 className="countryDisplayText">
            Top Level Domain:{" "}
            <span className="countryDetailSpan">{country.topLevelDomain}</span>
          </h2>
          <h2 className="countryDisplayText">
            Currencies:{" "}
            {country.currencies.map(name => (
              <span className="countryDetailSpan">{name.name}</span>
            ))}
          </h2>
          <h2 className="countryDisplayText">
            Languages:{" "}
            <span className="countryDetailSpan">
              {country.languages.map(language => language.name)}
            </span>
          </h2>
          <h2 className="countryDisplayText">Border Countries:</h2>
          {country.borders.map(name => (
            <span className="countryDetailSpan">{` ${name}\t`}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryDisplay;
