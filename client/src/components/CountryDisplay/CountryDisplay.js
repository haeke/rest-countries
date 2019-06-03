import React from "react";
import { Link } from "react-router-dom";

import "./CountryDisplay.css";

import CountryImage from "../CountryImage/CountryImage";

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
      <div className="countryInfo">
        <div className="countryInfoLeft">
          <CountryImage
            src={country.flag}
            alt={country.name}
            className="countryDisplayImage"
          />
        </div>
        <div className="countryInfoRight">
          <h1 className="countryName">{country.name}</h1>
          <div className="countryInfoWrapper">
            <div className="countryInfoWrapperLeft">
              <h2 className="countryDisplayText">
                Native Name:{" "}
                <span className="countryDetailSpan">{country.nativeName}</span>
              </h2>
              <h2 className="countryDisplayText">
                Population:{" "}
                <span className="countryDetailSpan">{country.population}</span>
              </h2>
              <h2 className="countryDisplayText">
                Region:{" "}
                <span className="countryDetailSpan">{country.region}</span>
              </h2>
              <h2 className="countryDisplayText">
                Sub Region:{" "}
                <span className="countryDetailSpan">{country.subregion}</span>
              </h2>
              <h2 className="countryDisplayText">
                Capital:{" "}
                <span className="countryDetailSpan">{country.capital}</span>
              </h2>
            </div>
            <div className="countryInfoWrapperRight">
              <h2 className="countryDisplayText">
                Top Level Domain:{" "}
                <span className="countryDetailSpan">
                  {country.topLevelDomain}
                </span>
              </h2>
              <h2 className="countryDisplayText">
                Currencies:{" "}
                {country.currencies.map(name => (
                  <span className="countryDetailSpan" key={name.name}>
                    {name.name}
                  </span>
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
                <span
                  className="countryDetailSpan"
                  key={name}
                >{` ${name}\t`}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDisplay;
