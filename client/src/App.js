import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Create from './pages/Create';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Movies from './pages/Movies';



function App() {
  return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/search' component={Search} />
        <Route exact path='/playlist' component={Playlist} />
        <Route exact path='/movies' component={Movies} />
        <NavBar/>
      </Router>
  );
}

export default App;
