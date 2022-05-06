import getDataApi from '../services/moviesApi';
import { useState, useEffect } from 'react';
import {Routes, Route, useLocation, matchPath} from 'react-router-dom';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';




  function App ()  {
    const [dataScenes, setDataScenes] = useState([]);
    
    // variable de estado películas filtradas
    const [filterMovies, setFilterMovies] = useState ("");

    // variable de estado de años filtrados
    const [filterYears, setFilterYears] = useState ("");
    
    useEffect(()=> {
      getDataApi().then((dataApi) => {
        setDataScenes(dataApi);
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
    
    const MoviesFilters = dataScenes
    
    .filter((scene) => {
      return scene.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })
    
    .filter((scene) => {
      if(filterYears === "all"){
        return true;
      }
      else if (filterYears.length === 0) {
        return true;
      } else {
        return filterYears.includes(scene.year);
      }
    });

    
    // array de todos los años de películas
    const getYears = () => {
      const allYears = dataScenes.map((scene)=>scene.year);
      const uniqueYears = allYears.filter((year, index) => 
      {
        return allYears.indexOf(year) === index;
      });
      return uniqueYears;
      };

      // Buscar cual es la película que quiero buscar en detalle

      const { pathname } = useLocation();
      const dataPath = matchPath('/movie/:movieId', pathname);
      const movieId= dataPath !==null ? dataPath.params.movieId: null;
      const movieFound = dataScenes.find((scene)=> scene.id === parseInt(movieId));
    console.log({movieId,movieFound,dataScenes});
    
      return (
        <>
        <Routes>
          <Route 
          path="/"
          element={
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
          }/>
          <Route 
          path="/movie/:movieId" 
          element={<MovieSceneDetail movieFound={movieFound} scene={filterMovies}/>}/>
        </Routes>
    
        </>
    );
  }

export default App;