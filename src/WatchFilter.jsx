import React from "react";

let WatchFilter = (props) => (
  <div className="watchButtons">
    <button id="watched" onClick={(e) => filterWatched(props.movies, e.target.id)}>Watched</button>
    <button id="toWatch" onClick={(e) => filterWatched(props.movies, e.target.id)}>To Watch</button>
  </div>
);

let filterWatched = function(movies, id) {
  let nodelist = document.getElementsByClassName("movie");
  for (let i = 0; i < nodelist.length; ++i) {
    if (nodelist[i].id !== "noResult") {
      nodelist[i].hidden = false;
    }
  }
  for (let i = 0; i < movies.length; ++i) {
    if (id === "watched" && movies[i].watched === "To Watch") {
      for (let j = 0; j < nodelist.length; ++j) {
        if (movies[i].title === nodelist[j].childNodes[0].data) {
          nodelist[j].hidden = true;
        }
      }
    } else if (id === "toWatch" && movies[i].watched === "Watched") {
      for (let j = 0; j < nodelist.length; ++j) {
        if (movies[i].title === nodelist[j].childNodes[0].data) {
          nodelist[j].hidden = true;
        }
      }
    }
  }
}

export default WatchFilter;