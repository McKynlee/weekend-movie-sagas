import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import {
  Grid,
  Breadcrumbs,
  Typography,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';


// Custom components:
import MovieList from '../MovieList/MovieList';
import MovieItemDetails from '../MovieItemDetails/MovieItemDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  // breadcrumbs style:
  const breadcrumbStyle = {
    display: 'flex',
    justifyContent: 'center',
    color: 'white'
  };

  return (
    <div className="App">
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item xs={12}>
          <header className="App-header">
            <Typography variant='h3' component='h1'
            >
              The Movies Saga!
            </Typography>
          </header>
        </Grid>
        <Router>

          <Grid item xs={12}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className='App-breadcrumbs'
              style={breadcrumbStyle}
            >
              <Link to='/' style={{ color: 'white' }}>
                <HomeIcon />
              Home
             </Link>
              <Link to="/add" style={{ color: 'white' }}>
                <MovieIcon />
                Add Movie
              </Link>
            </Breadcrumbs>
          </Grid>

          <Grid item>
            {/* Movie List page */}
            <Route path="/" exact>
              <MovieList />
            </Route>
          </Grid>

          <Grid item>
            {/* Details page */}
            <Route path="/details/:id" exact>
              <MovieItemDetails />
            </Route>
          </Grid>

          <Grid item>
            {/* Add Movie page */}
            <Route path="/add" exact>
              <AddMovie />
            </Route>
          </Grid>

        </Router>

      </Grid>
    </div >
  );
}


export default App;
