import getDataApi from '../services/moviesApi';
import { useState, useEffect } from 'react';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';

  function App ()  {
    const [dataTasks, setDataTasks] = useState([]);
    
    // variable de estado películas filtradas
    const [filterMovies, setFilterMovies] = useState ("");

    // variable de estado de años filtrados
    const [filterYears, setFilterYears] = useState ("");
    
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

    const handleFilterYear = (ev) => {
      const inputValue = ev.target.value;
      setFilterYears (inputValue);

    }

    
    // constante que filtra las películas
    
    const MoviesFilters = dataTasks.filter((task) => {
      return task.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })

    // array de todos los años de películas
    const getYears = () => {
      const allYears = dataTasks.map((task)=>task.year);
      const uniqueYears = allYears.filter((year, index) => 
      {
        return allYears.indexOf(year) === index;
      });
     return uniqueYears;
    };
   
    
    return (
        <>
        <Filters 
        handleFilterMovie = {handleFilterMovie}
        handleFilterYear = {handleFilterYear}
        filterMovies = {filterMovies}
        uniqueYears = {getYears()}
        />
        <MovieSceneList 
        MoviesFilters = {MoviesFilters}
        />
        </>
    );
  }

export default App;