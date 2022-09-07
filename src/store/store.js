import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import headerReducer from './header-reducer';
import homeReducer from './home-reducer';
import movieReducer from './movie-reducer';
import moviesReducer from './movies-reducer';

let reducers = combineReducers({
	header: headerReducer,
	home: homeReducer,
	movies: moviesReducer,
	movie: movieReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
window.store = store;
