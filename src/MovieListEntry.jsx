import React from "react";

let MovieListEntry = (props) => (
  <div className="movie">
    {props.movie.title}
    <button className="watched" onClick={
      (e) => (props.updateState(toggleWatched(props.movie)))
    }>{props.movie.watched}</button>
  </div>
)

let toggleWatched = function (movie) {
  if (movie.watched === "To Watch") {
    movie.watched = "Watched";
  } else {
    movie.watched = "To Watch";
  }
  return movie;
}

export default MovieListEntry;