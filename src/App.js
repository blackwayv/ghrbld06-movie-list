import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'}],
      changed: false
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(movies, changed) {
    if(changed) {
      this.setState({
        movies: movies,
        changed: changed
      });
    } else {
      this.setState({
        movies: movies
      });
    }
  }

  render() {
    return (
      <div>
        <div id="header">MovieList</div>
        <AddMovie updateState={this.updateState} state={this.state} />
        <Search movies={this.state.movies} updateState={this.updateState} />
        <div id="movies">
          {this.state.movies.map(movie =>
            <MovieListEntry movie={movie} />
            )}
        </div>
      </div>
    );
  }
}

export default App;