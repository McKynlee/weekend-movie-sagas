import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieItemDetails() {
  const history = useHistory();

  // Bring movieDetails in from Reducer
  // in order to render them on page:
  const movieDetails = useSelector(store =>
    store.movieDetails)
  console.log('movieDetails:', movieDetails);

  // Navigate back to movie list on 'Back to List' click:
  const backToList = () => {
    history.push('/');
  }

  return (
    <div>
      <div>{movieDetails[0].description}</div>
      <button onClick={backToList}>Back to List</button>
    </div>
  )
} // end MovieItemDetails

export default MovieItemDetails;