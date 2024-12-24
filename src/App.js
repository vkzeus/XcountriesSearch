import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
        setFilteredCountries(sortedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(text)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchText}
          onChange={handleSearch}
          className="search-bar"
          data-cy="searchInput"
        />
      </div>
      <div className="grid-container">
        {filteredCountries.map((country) => (
          <div key={country.cca3} className="countryCard">
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="countryFlag"
            />
            <h2 className="countryName">{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
