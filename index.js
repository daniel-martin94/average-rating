import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import data from './data.json'


/*

Given a list of starting ratings, create a compnetnet that allows a user to rate and update the average

*/

//First start with a displaying the current movie
function App() {
  console.log(data.movies)

  const [currIndex, updateIndex] = useState(0)
  const [currMovie, updateMovie] = useState(data.movies[0])

  function setIndex (idx) {
    //console.log(idx)
    // if(idx < 0) {
    //   console.log("hey")
    //   updateIndex(data.movies.length - 1)
    //   console.log(data.movies.length - 1)
    // //   updateMovie(currIndex)
    // }
  }
    return (
      <div>
      <button onClick={setIndex(currIndex - 1)}>Decrement</button>
        <div class="center">
          <img className="movie-thumbnail" src={currMovie.image}/>
          <h2>{currMovie.title}</h2>
        </div>
        <button onClick={setIndex(currIndex + 1)}>Increment</button>
      </div>
    );
  }

render(<App />, document.getElementById('root'));
