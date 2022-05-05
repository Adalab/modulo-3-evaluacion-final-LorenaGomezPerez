import getDataApi from '../services/moviesApi';
import { useState, useEffect } from 'react';
import MovieSceneList from './MovieSceneList';

  function App ()  {
    const [dataTasks, setDataTasks] = useState([]);
    
    useEffect(()=> {
      getDataApi().then((dataApi) => {
        setDataTasks(dataApi);
      });
    }, []);
    return (
        <>
        <h1>Task Owen Wilson</h1>
        <MovieSceneList tasks = {dataTasks}/>
        </>
    );
  }

export default App;