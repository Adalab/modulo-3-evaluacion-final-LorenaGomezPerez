import MovieSceneItem from "./MovieSceneItem";


function MovieSceneList (props) {

    const htmlTasks = props.MoviesFilters.map((scene)=>{
        return  <li key={scene.id}>
            <MovieSceneItem scene={scene}/>
        </li>
    });

    return (
        <ul>
            {htmlTasks}
        </ul>
    );
}

export default MovieSceneList;

