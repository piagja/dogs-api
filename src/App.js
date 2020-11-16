import React, { useState, useEffect } from 'react';
import './App.css';

const URL = 'https://dog.ceo/api/breeds/image/random'

function App() {
  const [dogs, setDogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(URL)
      const dogs = await response.json()
      setDogs(dogs)
      console.log(dogs)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return (
      <div className='App'>Loading ...</div>
    )
  } else {
  return (
    <div className="App">
      { <img src={dogs.message} alt='Dog' />}
    </div>
  );
}
}

export default App;
