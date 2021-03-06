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

  console.log('title:', title);

  return (
    <div>
      <input type="text" value={title}
        placeholder="Movie Title"
        onChange={(event) => { setTitle(event.target.value) }}
      />
    </div>
  )
} //end AddMovie

export default AddMovie;