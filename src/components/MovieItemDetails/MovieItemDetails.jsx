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

  // declare variable to represent genre array within movieDetails:
  const genreArray = movieDetails[0].genres;

  // Navigate back to movie list on 'Back to List' click:
  const backToList = () => {
    history.push('/');
  }

  return (
    <main>
      <section>
        <Box m={3}>
          <Typography variant='h5' component="h3">
            {movieDetails[0].title}
          </Typography>
        </Box>
        <img className="Movie-Item-img"
          src={movieDetails[0].poster} alt={movieDetails[0].title} />
      </section>
      <section>
        <Box m={3}>
          <Box boxShadow={10} m="auto" p={3}
            className="Movie-Item-genres">
            <Typography variant='h6' component="h4">
              Associate Genres:
          </Typography>
            {genreArray.map(genre => {
              return (
                <Typography variant='body1'
                  component="div"
                  key={genre.id}>
                  {genre}
                </Typography>
              )
            })}
          </Box>
        </Box>
        <Box boxShadow={10} m="auto" p={3}
          className="Movie-Item-description">
          <Typography variant='h6' component="h4">
            Movie Description:
          </Typography>
          <Typography variant='body1'
            component="div">
            {movieDetails[0].description}
          </Typography>
        </Box>
      </section>
      <Box m={3}>
        <Button variant="outlined"
          onClick={backToList}>
          Back to List
      </Button>
      </Box>
    </main>
  )
} // end MovieItemDetails

export default MovieItemDetails;