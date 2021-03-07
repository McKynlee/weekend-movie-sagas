import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieList.css'
import {
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
} from '@material-ui/core';


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

    // Trying to slow down the move to details page so I have time
    // to get the needed data from db:
    moveToDetails();
  }

  const moveToDetails = () => {
    history.push('/details')
  }

  return (
    <Grid container>
      <main>
        <Grid item xs={12}>
          <Typography variant='h4' component='h2'>
            MovieList
      </Typography>
        </Grid>
        <section className="movies">
          {movies.map(movie => {
            return (
              <div key={movie.id} onClick={() =>
                handleMovieDetail(movie.id)}>
                <h3>{movie.title}</h3>
                <img src={movie.poster}
                  alt={movie.title}
                  className="Movie-List-poster"
                />
              </div>
            );
          })}
        </section>
      </main>
    </Grid>
  );
}

export default MovieList;