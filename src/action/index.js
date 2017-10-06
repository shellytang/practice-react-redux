export function selectMovie(movie) {
  //selectMovie is an ActionCreator that returns an action - an obj with a type and payload
  return {
    type: 'MOVIE_SELECTED',
    payload: movie,
  };
}
