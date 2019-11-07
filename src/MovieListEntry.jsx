import React from "react";

let MovieListEntry = (props) => (
  <div className="movie">
    {props.movie.title}
  </div>
)

export default MovieListEntry;