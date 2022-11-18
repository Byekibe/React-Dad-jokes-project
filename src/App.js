import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [quote, setQuote] = useState("")


  const fetchData = () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    }


    fetch("https://icanhazdadjoke.com/", config)
      .then(res => res.json())
      .then(data => {
        setQuote(() => data)
      })
  }
  


  useEffect(() => {
    fetchData()
  }, [])  


  const handleClick = () => {
    fetchData()
  }

  return (
    <div className="App">
      {/* <p>Joke: {quote.joke}</p> */}
      <div className='card'>
        <div className='card-title'>
            Dad Jokes
        </div>
        <div className='card-body'>
            {quote.joke}
        </div>
        <button onClick={handleClick} className='jokeBtn'>Next Joke</button>
      </div>
    </div>
  );
}

export default App;
