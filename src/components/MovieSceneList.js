import MovieSceneItem from "./MovieSceneItem";


function MovieSceneList (props) {

    const htmlTasks = props.MoviesFilters.map((task, index)=>{
        return  <li key={index}>
            <MovieSceneItem task={task}/>
        </li>
    });

    return (
        <ul>
            {htmlTasks}
        </ul>
    );
}

export default MovieSceneList;

