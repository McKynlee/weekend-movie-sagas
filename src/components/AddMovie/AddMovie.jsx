import { useDispatch } from "react-redux";
import { useState } from 'react';

// Form page for users to add movie to the list:
function AddMovie() {
  const dispatch = useDispatch;

  // Create local state to store inputs as user types:
  const [title, setTitle] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  console.log('title:', title,
    'posterUrl:', posterURL,
    'description:', description);

  return (
    <div>
      <label>Title:
      <input type="text" value={title}
          placeholder="Movie Title"
          onChange={event => setTitle(event.target.value)}
        />
      </label>
      <label>Movie Poster URL:
      <input type="text" value={posterURL}
          placeholder="Poster URL"
          onChange={event => setPosterURL(event.target.value)}
        />
      </label>
      <label>Description:
        <textarea id="description"
          name="description" rows="4" cols="10"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
    </div>
  )
} //end AddMovie

export default AddMovie;