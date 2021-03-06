import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

// Form page for users to add movie to the list:
function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Create local state to store inputs as user types:
  const [title, setTitle] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  // Test that inputs are captured:
  console.log('title:', title,
    'posterUrl:', posterURL,
    'description:', description,
    'genre:', genre);

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
        genre
      }
    })
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
          setGenre(event.target.value)}>
          <option value=''>Choose a Genre</option>
          <option>Test Genre</option>
          {/* .map genre list here */}
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