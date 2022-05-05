

function MovieSceneList (props,index) {

    const htmlTasks = props.tasks.map((task)=>{
        return  <li key={index}>
            <img width="100" height="100" 
            alt={task.poster} 
            src={task.poster}
            />
            
            <h4>{task.movie}</h4>
            <p>{task.full_line}</p>
            <p>{task.year}</p>
        </li>
    });

    return (
        <ul>
            {htmlTasks}
        </ul>
    );
}

export default MovieSceneList;

