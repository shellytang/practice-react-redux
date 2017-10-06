import React from 'react';
import {connect} from 'react-redux';

class MovieDetail extends React.Component {
  render() {
    if(!this.props.movie) {
      return 'Select a movie to get started'
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.movie.title}</div>
        <div>Year: {this.props.movie.year}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);
