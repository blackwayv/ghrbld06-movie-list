import React from "react";

let Search = (props) => (
  <div className="search">
    <input id="input" placeholder="Search..."></input>
    <button id="searchButton" onClick={(e) => props.updateState(filter(document.getElementById("input").value, props.movies))}>Go!</button>
  </div>
)

let filter = function(query, movies) {
  query = query.trim().toLowerCase();
  for (let i = 0; i < movies.length; i++) {
    if (!movies[i].title.toLowerCase().includes(query)) {
      movies.splice(i, 1);
      i--;
    }
  }
  if (movies.length === 0) {
    movies.push({title: "No results found"});
  }
  return movies;
}

export default Search;