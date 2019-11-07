import React from "react";

let AddMovie = (props) => (
  <div id="newBox">
    <input id="movieTitle" placeholder="Add movie title here"></input>
    <button id="addMovie" onClick={(e) => (clickAdd(props.state.changed,
    document.getElementById("movieTitle").value, props.updateState, props.state.movies))}>Add</button>
  </div>
)

let clickAdd = function(changed, input, updateState, movies) {
  if (input.trim().length > 0) {
    if (!changed) {
      changed = true;
      movies = [];
    }
    movies.push({"title": input});
    updateState(movies, changed);
  }
  document.getElementById("movieTitle").value = '';
}

export default AddMovie;