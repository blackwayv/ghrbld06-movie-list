import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import WatchFilter from './WatchFilter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ title: 'Mean Girls', watched: "To Watch" },
      { title: 'Hackers', watched: "To Watch" },
      { title: 'The Grey', watched: "To Watch" },
      { title: 'Sunshine', watched: "To Watch" },
      { title: 'Ex Machina', watched: "To Watch" }],
      changed: false
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(movies, changed) {
    if (Array.isArray(movies)) {
      if (changed) {
        this.setState({
          movies: movies,
          changed: changed
        });
      } else {
        this.setState({
          movies: movies
        });
      }
    } else {
      for (let i = 0; i < this.state.movies.length; ++i) {
        if (this.state.movies[i].title === movies.title) {
          this.state.movies[i] = movies;
        }
      }
      this.setState({
        movies: this.state.movies
      });
    }
    let nodelist = document.getElementsByClassName("movie");
    for (let i = 0; i < nodelist.length; ++i) {
      nodelist[i].hidden = false;
    }
    document.getElementById("noResult").hidden = true;
  }

  render() {
    return (
      <div>
        <div id="header">MovieList</div>
        <AddMovie updateState={this.updateState} state={this.state} />
        <div id="topBar">
          <WatchFilter movies={this.state.movies} />
          <Search />
        </div>
        <div id="movies">
          <div className="movie" id="noResult" hidden>No results found</div>
          {this.state.movies.map(movie =>
            <MovieListEntry movie={movie} updateState={this.updateState} />
          )}
        </div>
      </div>
    );
  }
}

export default App;