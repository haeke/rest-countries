// Mock URL Endpoint https://restcountries.eu/rest/v2/name/united
// The query string after the name is the only item that will change.

import { useReducer, useState, useEffect } from "react";

// This function is used by the useFetch custom hook, it determines the shape of the data that is to be returned upon successful request or a failed request. The benefit to this approach is that we are managing 3 values inside the state tree at once using the useReducer hook over using 3 different useState functions for managing the data object, isLoading boolean and errorMessage string.
export const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FAILURE":
      return {
        data: null,
        isLoading: false,
        errorMessage: action.error
      };
    case "SUCCESS":
      return {
        data: action.data,
        isLoading: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export function useFetch(URL) {
  // The initial State that we want the reducer to return.
  const initialState = { data: null, isLoading: true, errorMessage: "" };
  // The url that the Countries component will pass to this useReducer hook, it will change whenever a user types into the input form.
  const [url, setUrl] = useState(URL);
  // The reducer itself, we will return an object that includes the data, isLoading, errorMessage and function for updating the URL called doFetch.
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // support the ability to cancel async calls
    let didCancel = false;
    // Note: To use async inside of useEffect we needed to define the fetchData expression, we manage how many times the function is called by only calling the function when the url state changes.
    const fetchData = async () => {
      try {
        // pass the full url to the fetch method
        const response = await fetch(`${url}`);
        let json = await response.json();
        if (json.status === 404) {
          throw new Error(json);
        }
        if (!didCancel) {
          // call dispatch to update the reducer state object
          dispatch({ type: "SUCCESS", data: json });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FAILURE", error: error.message || error });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  const doFetch = url => {
    setUrl(url);
  };

  return { ...state, doFetch };
}
