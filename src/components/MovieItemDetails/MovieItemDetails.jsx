import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';

function MovieItemDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movieIdParam = useParams(':id');
  console.log('movieIdParam', movieIdParam);

  useEffect(() => {
    dispatch({
      type: 'SELECT_MOVIE',
      payload: movieIdParam
    });
  }, []);

  // Bring movieDetails in from Reducer
  // in order to render them on page:
  const movieDetails = useSelector(store => store.movies);
  console.log('movieDetails:', movieDetails);


  // let movieDetails;

  // for (let movie of movies) {
  //   if (movie.id == movieIdParam) {
  //     movieDetails = movie;
  //     return movieDetails;
  //   }
  // }
  // console.log('movieDetails:', movieDetails);

  // declare variable to represent genre array within movieDetails:
  const genreArray = movieDetails[0].genres;

  // Navigate back to movie list on 'Back to List' click:
  const backToList = () => {
    history.push('/');
  }

  return (
    <main>
      <section>
        <h3>{movieDetails[0].title}</h3>
        <img src={movieDetails[0].poster} alt={movieDetails[0].title} />
      </section>
      <section>
        <h4>Associate Genres:</h4>
        {genreArray.map(genre => {
          return (
            <div>{genre}</div>
          )
        })}
        <div>{movieDetails[0].description}</div>
      </section>

      <button onClick={backToList}>Back to List</button>
    </main>
  )
} // end MovieItemDetails

export default MovieItemDetails;