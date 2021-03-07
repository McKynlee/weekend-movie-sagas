import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Grid, Breadcrumbs, makeStyles } from '@material-ui/core';

// Custom components:
import MovieList from '../MovieList/MovieList';
import MovieItemDetails from '../MovieItemDetails/MovieItemDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  // Setting up material UI:
  const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));

  const classes = useStyles();

  export default function IconBreadcrumbs() {
    const classes = useStyles();
  }

  return (
    <div className="App">
      <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
        <Grid item xs={12}>
          <header className="App-header">
            <h1>The Movies Saga!</h1>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
              Home
            </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                className={classes.link}
              >
                <WhatshotIcon className={classes.icon} />
        Core
      </Link>
              <GrainIcon className={classes.icon} />

            </Breadcrumbs>
          </header>


          <Router>
            <nav>
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/add">Add Movie</Link>
              </div>
            </nav>
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
