import React from 'react';
import {connect} from 'react-redux';
import {selectMovie} from '../../action/index';
import {bindActionCreators} from 'redux';

class MovieList extends React.Component {

  renderList() {
    return this.props.movies.map(movie => {
      return (
        <li
          key={movie.title}
          onClick={() => this.props.selectMovie(movie)}>
          {movie.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props inside of MovieList
  return {
    movies: state.movies
  }
};

  // anything returned from this function will end up as props on the MovieList container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMovie: selectMovie}, dispatch);
};

//Promote from MovieList from component to a container - it needs to know about this new dispatch method, selectMovie. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
