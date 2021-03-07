import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import {
  Grid,
  Breadcrumbs,
  makeStyles
} from '@material-ui/core';
// import {
//   HomeIcon,
//   WhatshotIcon,
//   GrainIcon
// } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';


// Custom components:
import MovieList from '../MovieList/MovieList';
import MovieItemDetails from '../MovieItemDetails/MovieItemDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {

  return (
    <div className="App">
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item xs={12}>
          <header className="App-header">
            <h1>The Movies Saga!</h1>
          </header>

          <Router>
            <Breadcrumbs aria-label="breadcrumb">
              <Link to='/' color="inherit">
                <HomeIcon />
              Home
             </Link>
              <Link to="/add"
                color="inherit" >
                <GrainIcon />
                Add Movie
              </Link>
            </Breadcrumbs>

            {/* Movie List page */}
            <Route path="/" exact>
              <MovieList />
            </Route>

            {/* Details page */}
            <Route path="/details" exact>
              <MovieItemDetails />
            </Route>

            {/* Add Movie page */}
            <Route path="/add" exact>
              <AddMovie />
            </Route>

          </Router>

        </Grid>
      </Grid>
    </div >
  );
}


export default App;
