import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `http://api.themoviedb.org/3/search/movie?api_key=936331d0d4df8bf835d065d4992d25a8&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Router basename="/movie-browser">
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" component={AboutView} />
          <Route path="/search">
            <SearchView keyword={searchText} searchResults={searchResults} />
          </Route>
          <Route path="/movies/:id" component={MovieView} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
