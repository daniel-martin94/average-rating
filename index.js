import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import data from './data.json'


/*

Given a list of starting ratings, create a compnetnet that allows a user to rate and update the average

*/

//First start with a displaying the current movie
function App() {

  const [currIndex, updateIndex] = useState(0)
  const [currMovie, updateMovie] = useState(data.movies[0])

  function setIndex (idx) {
    if(idx < 0) {
      updateIndex(data.movies.length - 1)
    }
    else if (idx >= data.movies.length){
      updateIndex(0)
    }
    else {
      updateIndex(idx)
    }
  }

  useEffect(() => {
      updateMovie(data.movies[currIndex])
  }, [currIndex])
    return (
      <div>
        <button onClick={() => setIndex(currIndex - 1)}> {'<'} </button>
        <div className="center">
          <img className="movie-thumbnail" src={currMovie.image}/>
          <h2>{currMovie.title}</h2>
        </div>
        <button onClick={() => setIndex(currIndex + 1)}>></button>
      </div>
    );
  }

render(<App />, document.getElementById('root'));
