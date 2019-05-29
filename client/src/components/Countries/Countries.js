/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useFetch } from "../../api/api";

function Countries() {
  let [name, updateName] = useState("am");
  // The useFetch hook returns objects and a method to change the url that we will use to fetch different data. America is loaded initially so that there will be data on the page.
  let { data, isLoading, errorMessage, doFetch } = useFetch(
    `https://restcountries.eu/rest/v2/name/${name}`
  );
  // This function is called when a user types into the input.
  const handleChange = event => {
    const { value } = event.target;
    updateName(value);
    if (value !== "") {
      doFetch(`https://restcountries.eu/rest/v2/name/${value}`);
    }
  };
  // This function is called when the filter drop select is used.
  const handleSelect = event => {
    const { value } = event.target;
    // calls the doFetch function with a different url
    if (value !== "") {
      doFetch(`https://restcountries.eu/rest/v2/region/${value}`);
    }
  };
  // For testing purposes - we can see the values inside of the custom reducer hook.
  console.log("The data object ", data);
  console.log("The isLoading Boolean ", isLoading);
  console.log("The errorMessage ", errorMessage);
  return (
    <section className="countriesContainer">
      <div className="inputSection">
        {/* A user can click on the submit button to fetch for data */}
        <form
          className="formWrapper"
          onSubmit={event => {
            event.preventDefault();
            doFetch(`https://restcountries.eu/rest/v2/name/${name}`);
          }}
        >
          <div className="inputIconGroup">
            <input
              className="countryInput"
              name="name"
              value={name}
              placeholder="Search for a country..."
              onChange={handleChange}
            />
            <button className="searchIcon">
              <i className="fa fa-search " />
            </button>
          </div>
          <select name="regions" id="region" onChange={handleSelect}>
            <option value="" selected disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </div>
      {/* Refactor to component named:  */}
      {/* include the flag image, flag name, population, region and capital */}
      {/* image name : data.flag */}
      {/* population: data.population */}
      {/* region: data.region */}
      {/* capital: data.capital */}
      <div className="countryListWrapper">
        {isLoading ? (
          <h1>Loading Data...</h1>
        ) : errorMessage ? (
          <div>Error fetching data...</div>
        ) : (
          Object.keys(data).length > 0 &&
          data.map(country => (
            <Link
              to={{
                pathname: `/country/${country.name}`,
                state: { country: country }
              }}
              className="fourth countryInfo"
              key={country.name}
            >
              <img
                className="flagImage"
                src={country.flag}
                alt={country.name}
              />
              <div className="countryTextContainer">
                <h1>{country.name}</h1>
                <h1 className="countryParagraph">
                  Population: {country.population}
                </h1>
                <h1 className="countryParagraph">Region: {country.region}</h1>
                <h1 className="countryParagraph">Capital: {country.capital}</h1>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default Countries;
