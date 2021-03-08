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
import { spacing } from '@material-ui/system';

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
    // Navigate back to home page on save
    history.push('/');
  } // end saveNewMovie

  return (
    <div>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">
        <Box m={5}>
          <Card className="Add-Movie-card">
            <form onSubmit={saveNewMovie}>
              <Grid item xs={12}>
                <Box m={3}>
                  <InputLabel>
                    <TextField type="text" value={title}
                      placeholder="Movie Title"
                      label="Title"
                      onChange={event =>
                        setTitle(event.target.value)}
                    />
                  </InputLabel>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box m={3}>
                  <InputLabel>
                    <TextField type="text"
                      value={posterURL}
                      label="Movie Poster URL"
                      onChange={event =>
                        setPosterURL(event.target.value)}
                    />
                  </InputLabel>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box m={3}>
                  <InputLabel>
                    <TextField multiline rows={12}
                      label="Movie Description"
                      name="description" rows="4" cols="10"
                      variant="outlined"
                      value={description}
                      onChange={event =>
                        setDescription(event.target.value)}
                    />
                  </InputLabel>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box m={3}>
                  <InputLabel id="genre">Genre</InputLabel>
                  <Select
                    displayEmpty
                    id="genre"
                    value={genre_id}
                    onChange={event =>
                      setGenre_id(event.target.value)}>
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem >
                    {/* set value of each option = that genre's id */}
                    {genreList.map(genre => {
                      return (
                        <MenuItem key={genre.id}
                          value={genre.id}
                        >
                          {genre.name}
                        </MenuItem>
                      )
                    })}
                  </Select>
                </Box>
              </Grid>
            </form>
          </Card>
        </Box>
      </Grid>
      <Grid container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item >
          <Button className="Add-Movie-cancel-btn"
            variant="contained"
            onClick={handleCancel}>
            Cancel
            </Button>
        </Grid>
        <Grid item>
          <Button className="Add-Movie-save-btn"
            variant="contained"
            color="primary"
            onClick={saveNewMovie}>
            Save
        </Button>
        </Grid>
      </Grid>

    </div>
  )
} //end AddMovie

export default AddMovie;