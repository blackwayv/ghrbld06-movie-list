import React from "react";

let Search = (props) => (
  <div className="search">
    <form>
      <input id="input" placeholder="Search..."></input>
      <button id="searchButton" type="submit" onClick={(e) => {
        e.preventDefault();
        filterSearch(document.getElementById("input").value);
      }}>Go!</button>
    </form>
  </div>
)

let filterSearch = function (query) {
  query = query.trim().toLowerCase();
  let nodelist = document.getElementsByClassName("movie");
  for (let i = 0; i < nodelist.length; ++i) {
    nodelist[i].hidden = false;
    if (nodelist[i].id === "noResult") {
      nodelist[i].hidden = true;
    }
  }
  if (query) {
    let count = 0;
    for (let i = 0; i < nodelist.length; ++i) {
      if (!nodelist[i].childNodes[0].data.toLowerCase().includes(query)) {
        nodelist[i].hidden = true;
        if (nodelist[i].id !== "noResult") {
          ++count;
        }
      }
    }
    if (nodelist.length - 1 === count) {
      document.getElementById("noResult").hidden = false;
    }
  }
}

export default Search;