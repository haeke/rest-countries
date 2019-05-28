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
    <section>
      <Link to="/">Back</Link>
      <h1>Country Display</h1>
      <img className="flagImage" src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
      <h2>Native Name: {country.nativeName}</h2>
      <h2>Population: {country.population}</h2>
      <h2>Region: {country.region}</h2>
      <h2>Sub Region: {country.subregion}</h2>
      <h2>Capital: {country.capital}</h2>
      <h2>Top Level Domain: {country.topLevelDomain}</h2>
      <h2>Currencies: {country.currencies.map(name => name.name)}</h2>
      <h2>Languages: {country.languages.map(language => language.name)}</h2>
      <h2>Border Countries:</h2>
      {country.borders.map(name => ` ${name}\t`)}
    </section>
  );
};

export default CountryDisplay;
