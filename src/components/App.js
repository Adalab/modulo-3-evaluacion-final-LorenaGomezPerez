import getDataApi from '../services/moviesApi';
import { useState, useEffect } from 'react';
import MovieSceneList from './MovieSceneList';
import MovieFilters from './MovieFilters';

  function App ()  {
    const [dataTasks, setDataTasks] = useState([]);

  
    // variable de estado películas filtradas
    const [filterMovies, setFilterMovies] = useState ("");
    
    useEffect(()=> {
      getDataApi().then((dataApi) => {
        setDataTasks(dataApi);
      });
    }, []);

    
    // función que se encarga de cambiar la variable de estado de las películas filtradas
    const handleFilterMovie = (ev) => {
      const inputValue = ev.target.value;
      setFilterMovies(inputValue);
    };

    
    // constante que filtra las películas
    
    const MoviesFilters = dataTasks.filter((task) => {
      return task.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })
    
    return (
        <>
        <MovieFilters 
        handleFilterMovie = {handleFilterMovie}
        filterMovies = {filterMovies}
        />
        <MovieSceneList 
        MoviesFilters = {MoviesFilters}
        />
        </>
    );
  }

export default App;