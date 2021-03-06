import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieItemDetails() {
  const dispatch = useDispatch();

  // Bring movieDetails in from Reducer
  // in order to render them on page:
  const movieDetails = useSelector(store =>
    store.movieDetails)

  console.log('movieDetails:', movieDetails);

  return (
    <div>
      TEST movie item details
    </div>
  )
} // end MovieItemDetails

export default MovieItemDetails;