import {combineReducers} from 'redux';
import MoviesReducer from './reducer-movies';
import ActiveMovie from './reducer-active-movie'
const rootReducer = combineReducers({
  movies: MoviesReducer,
  activeMovie: ActiveMovie,
});

export default rootReducer;
