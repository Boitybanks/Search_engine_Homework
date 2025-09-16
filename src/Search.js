import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  function HandleSearchSubmit(event) {
    event.preventDefault();
    setWeather(`It is currently 19° in ${query}`);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }
  return (
    <div>
      <form className="City" onSubmit={HandleSearchSubmit}>
        <input type="text" placeholder="Enter City" onChange={updateQuery} />
        <button type="submit">Search</button>
      </form>

      {weather && <h3>{weather}</h3>}
    </div>
  );
}
