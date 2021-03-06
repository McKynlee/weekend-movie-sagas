import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Bring movie list from DB in via Reducer:
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  // When movie clicked on, send user to detail page
  // to see that movie's info:
  const handleMovieDetail = (selectedMovieID) => {
    console.log('in handleMoveToDetail:', selectedMovieID);

    // Dispatch selectedMovieID to saga to use to collect
    // all movie details (including genres!) from DB:
    dispatch({
      type: 'FETCH_MOVIE_DETAILS',
      payload: selectedMovieID
    })
    history.push('/details')
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div key={movie.id} onClick={() =>
              handleMovieDetail(movie.id)}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;