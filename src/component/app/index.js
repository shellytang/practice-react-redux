import React from 'react';
import MovieList from '../../container/movie-list';
import MovieDetail from '../../container/movie-detail';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MovieList />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
