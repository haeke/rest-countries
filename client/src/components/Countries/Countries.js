/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import CountryInput from "../CountryInput/CountryInput";
import CountryImage from "../CountryImage/CountryImage";
import CountrySelect from "../CountrySelect/CountrySelect";
import CountryFlagInfo from "../CountryFlagInfo/CountryFlagInfo";

import { useFetch } from "../../api/api";

function Countries({ on }) {
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
            <CountryInput
              className="countryInput"
              name="name"
              value={name}
              placeholder="Search for a country..."
              handleChange={handleChange}
            />
            <button className="searchIcon">
              <i className="fa fa-search " />
            </button>
          </div>
          <CountrySelect
            defaultSelect="Filter by Region"
            handleSelect={handleSelect}
            options={["Africa", "Americas", "Asia", "Europe", "Oceania"]}
            on={on}
          />
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
              className={on ? "fourth countryInfoAlt" : "fourth countryInfo"}
              key={country.name}
            >
              <CountryImage
                src={country.flag}
                alt={country.name}
                className="flagImage"
              />
              <CountryFlagInfo
                className="countryTextContainer"
                countryTitle={country.name}
                countryTitleClass=""
                countryPopulation={country.population}
                countryTextClass="countryText"
                countryRegion={country.region}
                countryCapital={country.capital}
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default Countries;
