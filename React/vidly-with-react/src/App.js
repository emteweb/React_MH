import React, { Component } from 'react';
import Movies from './components/Movies';
import './App.css';
import { getMovies } from './services/fakeMovieService';

class App extends Component {

  state = {
    movies: getMovies()
  }

  handleDelete = movie => {

  };

  render() {
    return (
      <main className='container'>
        <Movies />
      </main>
    );
  }

}

export default App;
