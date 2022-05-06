import getDataApi from '../services/moviesApi';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, matchPath} from 'react-router-dom';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';




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
    const handleFilterMovie = (value) => {
      setFilterMovies(value);
    };

    const handleFilterYear = (value) => {
      setFilterYears(value);
    };

    
    // constante que filtra las películas y los años
    
    const MoviesFilters = dataTasks
    
    .filter((task) => {
      return task.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })
    
    .filter((task) => {
      if(filterYears === "all"){
        return true;
      }
      else if (filterYears.length === 0) {
        return true;
      } else {
        return filterYears.includes(task.year);
      }
    });

    
    // array de todos los años de películas
    const getYears = () => {
      const allYears = dataTasks.map((task)=>task.year);
      const uniqueYears = allYears.filter((year, index) => 
      {
        return allYears.indexOf(year) === index;
      });
      return uniqueYears;
      };

      // Buscar cual es la película que quiero buscar en detalle

      const {pathname} = useLocation();
      const dataPath = matchPath("/movie/:id", pathname);
      const movieId= dataPath !==null ? dataPath.params.id: null;
      const movieFound = dataTasks.find(task=> task.id === movieId);
   
    
      return (
        <>
        <Routes>
          <Route path='./movie/:id' element={<MovieSceneDetail movieFound={movieFound}
          />}/>
        </Routes>
        
        <Filters 
        handleFilterMovie = {handleFilterMovie}
        handleFilterYear = {handleFilterYear}
        uniqueYears = {getYears()}
        />
        <MovieSceneList 
        MoviesFilters = {MoviesFilters}
        />
        </>
    );
  }

export default App;