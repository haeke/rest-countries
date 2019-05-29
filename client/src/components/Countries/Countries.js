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
  // For testing purposes - we can see the values inside of the custom reducer hook.
  console.log("The data object ", data);
  console.log("The isLoading Boolean ", isLoading);
  console.log("The errorMessage ", errorMessage);
  return (
    <section className="countriesContainer">
      .{/* A user can click on the submit button to fetch for data */}
      <form
        onSubmit={event => {
          event.preventDefault();
          doFetch(`https://restcountries.eu/rest/v2/name/${name}`);
        }}
      >
        <input name="name" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
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
