import React from "react";

let AddMovie = (props) => (
  <div id="newBox">
    <form>
      <input id="movieTitle" placeholder="Add movie title here..."></input>
      <button id="addMovie" type="submit" onClick={(e) => { e.preventDefault(); clickAdd(props.state.changed,
        document.getElementById("movieTitle").value, props.updateState, props.state.movies)}}>Add</button>
    </form>
  </div>
)

let clickAdd = function (changed, input, updateState, movies) {
  if (input.trim().length > 0) {
    if (!changed) {
      changed = true;
      movies = [];
    }
    movies.push({ "title": input, "watched": "To Watch" });
    updateState(movies, changed);
  }
  document.getElementById("movieTitle").value = '';
}

export default AddMovie;