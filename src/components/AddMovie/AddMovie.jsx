import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

// Form page for users to add movie to the list:
function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Create local state to store inputs as user types:
  const [title, setTitle] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [description, setDescription] = useState('');
  const [genre_id, setGenre_id] = useState(1);

  // Test that inputs are captured:
  // console.log('title:', title,
  //   'posterUrl:', posterURL,
  //   'description:', description,
  //   'genre:', genre_id);

  // Request all genres from db (via Saga) on load:
  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = () => {
    dispatch({
      type: 'FETCH_GENRES'
    })
  }

  // Bring in all genres saved in the reducer:
  const genreList = useSelector(store => store.genres)
  // console.log('genreList', genreList);

  // On click of cancel button, navigate to home
  const handleCancel = () => {
    console.log('handleCancel');
    history.push('/');
  }

  // When inputs submitted, dispatch to saga
  // to then be sent to db/reducer
  const saveNewMovie = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CREATE_MOVIE',
      payload: {
        title,
        poster: posterURL,
        description,
        genre_id
      }
    })
    history.push('/');
  } // end saveNewMovie

  return (
    <div>
      <form onSubmit={saveNewMovie}>
        <label>Title:
      <input type="text" value={title}
            placeholder="Movie Title"
            onChange={event =>
              setTitle(event.target.value)}
          />
        </label>
        <label>Movie Poster URL:
      <input type="text" value={posterURL}
            placeholder="Poster URL"
            onChange={event =>
              setPosterURL(event.target.value)}
          />
        </label>
        <label>Description:
        <textarea id="description"
            name="description" rows="4" cols="10"
            value={description}
            onChange={event =>
              setDescription(event.target.value)}
          />
        </label>
        <select onChange={event =>
          setGenre_id(event.target.value)}>
          <option value=''>Choose a Genre</option>
          {/* set value of each option = that genre's id */}
          {genreList.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            )
          })}
        </select>
        <button onClick={handleCancel}>
          Cancel
        </button>
        <button>
          Save
        </button>
      </form>
    </div>
  )
} //end AddMovie

export default AddMovie;