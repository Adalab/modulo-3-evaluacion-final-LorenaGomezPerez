import { useState, useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import "../styles/App.scss";
import getDataApi from "../services/moviesApi";
import LocalStorage from "../services/localStorage";
import Header from "./Header";
import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  // Variable de estado donde guardo todos los datos, es un array. En un primer momento está vacío
  const [dataScenes, setDataScenes] = useState(
    LocalStorage.get("dataScenes", [])
  );

  // Variable de estado películas filtradas
  const [filterMovies, setFilterMovies] = useState("");

  // Variable de estado de años filtrados
  const [filterYears, setFilterYears] = useState("");

  // Con useEffect se cargan los datos una sola vez cuando se carga la página. Los datos limpios que me devuelve la Api, con una promesa. Que los meto en la variable de estado para que me los modifique (setDataScenes)

  useEffect(() => {
    if (dataScenes.length === 0) {
      getDataApi().then((dataApi) => {
        setDataScenes(dataApi);
      });
    }
  }, []);

  //Función LocalStorage

  useEffect(() => {
    LocalStorage.set("dataScenes", dataScenes);
  }, [dataScenes]);

  // Función que se encarga de cambiar la variable de estado de las películas filtradas
  const handleFilterMovie = (value) => {
    setFilterMovies(value);
  };

  // Función que se encarga de cambiar la variable de estado de los años filtrados

  const handleFilterYear = (value) => {
    setFilterYears(value);
  };

  // Función para evitar el envio de formulario

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  // Función para que salte error si el usuario introduce un nombre incorrecto.

  const SceneNotFound = () => {
    if (filterMovies !== "" && MoviesFilters.length === 0) {
      return (
        <p className="errorMessage">
          No existe una película con el nombre "{filterMovies}".
        </p>
      );
    }
  };

  // Función que filtra por películas y por años

  const MoviesFilters = dataScenes

    .filter((scene) => {
      return scene.movie.toLowerCase().includes(filterMovies.toLowerCase());
    })

    .filter((scene) => {
      if (filterYears === "all") {
        return true;
      } else if (filterYears.length === 0) {
        return true;
      } else {
        return filterYears.includes(scene.year);
      }
    });

  // Función que saca del array todos los años de películas (allYears) y filtra sólo las ciudades únicas (uniqueYears). Con indexOf me retorna el año por la posición.

  const getYears = () => {
    const allYears = dataScenes.map((scene) => scene.year);
    const uniqueYears = allYears.filter((year, index) => {
      return allYears.indexOf(year) === index;
    });
    return uniqueYears;
  };

  // Buscar cual es la película que quiero buscar en detalle

  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = dataScenes.find((scene) => scene.id === parseInt(movieId));

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                handleSubmit={handleSubmit}
                handleFilterMovie={handleFilterMovie}
                handleFilterYear={handleFilterYear}
                filterMovies={filterMovies}
                filterYears={filterYears}
                uniqueYears={getYears()}
              />
              {SceneNotFound()}
              <MovieSceneList MoviesFilters={MoviesFilters} />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movieFound={movieFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
