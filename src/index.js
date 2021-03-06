import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('CREATE_MOVIE', createMovie);
  yield takeEvery('FETCH_GENRES', fetchAllGenres)
  yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails)
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });

  } catch {
    console.log('get all error');
  }
}

function* fetchAllGenres() {
  // get all genres from the DB
  try {
    const genres = yield axios.get('/api/genre');
    console.log('get all:', genres.data);

    yield put({
      type: 'SET_GENRES',
      payload: genres.data
    })
  }
  catch (err) {
    console.log('ERROR');
  }
} // end fetchAllGenres

function* fetchMovieDetails(action) {
  // get all details that belong to the movie that was clicked:
  // request server retrieve them from DB, then store in reducer
  try {
    const movieDetails = yield axios.get(`/api/movie/${action.payload}`)

    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: movieDetails.data,
    })
  }
  catch (err) {
    console.log('ERROR fetching movie details');
  }
} // end fetchMovieDetails

function* createMovie(action) {
  // post new movie from AddMovie.jsx to the DB
  yield axios.post('/api/movie', action.payload);

  // refresh movie list:
  try {
    yield put({
      type: 'FETCH_MOVIES'
    })
  }
  catch (error) {
    console.log('Error adding movie:', error);
  }
} //end createMovie

// Create sagaMiddleware so that we 
// can activate sagas in the storeInstance
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

const movieDetailsTemplate = {
  id: 0,
  title: '',
  poster: '',
  description: '',
  genre: [],
}
//Used to store current clicked-on movie details:
const movieDetails = (state = movieDetailsTemplate, action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
