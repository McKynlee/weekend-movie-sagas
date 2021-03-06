import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function MovieItemDetails() {
  const history = useHistory();
  const dispatch = useDispatch();

  // bring in selected movies on page load:
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_MOVIE_DETAILS' });
  // }, []);

  // Bring movieDetails in from Reducer
  // in order to render them on page:
  const movieDetails = useSelector(store => store.movieDetails)
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