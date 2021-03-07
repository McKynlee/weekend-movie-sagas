import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  TextField,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
} from '@material-ui/core';

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
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
        <FormControl onSubmit={saveNewMovie}>
          <Grid item xs={12}>
            <InputLabel>Title:
      <TextField type="text" value={title}
                placeholder="Movie Title"
                label="Title"
                onChange={event =>
                  setTitle(event.target.value)}
              />
            </InputLabel>
          </Grid>
          <Grid item xs={8}>
            <InputLabel>Movie Poster URL:
      <TextField type="text" value={posterURL}
                placeholder="Poster URL"
                onChange={event =>
                  setPosterURL(event.target.value)}
              />
            </InputLabel>
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Description:
            <TextField multiline rows={4}
                id="description"
                name="description" rows="4" cols="10"
                value={description}
                onChange={event =>
                  setDescription(event.target.value)}
              />
            </InputLabel>
          </Grid>
          <Grid item xs={3}>
            <Select
              name="genre"
              id="genre"
              value={genre_id}
              onChange={event =>
                setGenre_id(event.target.value)}>
              <MenuItem value=''>Choose a Genre</MenuItem >
              {/* set value of each option = that genre's id */}
              {genreList.map(genre => {
                return (
                  <MenuItem key={genre.id} value={genre.id}>
                    {genre.name}
                  </MenuItem>
                )
              })}
            </Select>
          </Grid>
        </FormControl>
        <Button onClick={handleCancel}>
          Cancel
        </Button>
        <Button>
          Save
        </Button>
      </Grid>
    </div>
  )
} //end AddMovie

export default AddMovie;