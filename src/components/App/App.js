import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

// Custom components:
import MovieList from '../MovieList/MovieList';
import MovieItemDetails from '../MovieItemDetails/MovieItemDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

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
    </div>
  );
}


export default App;
