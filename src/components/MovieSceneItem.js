import { Link } from 'react-router-dom';

function MovieSceneItem (props) {
    return (
        <Link to={`/movie/${props.scene.id}`}>
        <img width="100" height="100" 
            alt={props.scene.movie} 
            src={props.scene.poster}
            />
            <h4>{props.scene.movie}</h4>
            <p>{props.scene.quote}</p>
            <p>{props.scene.year}</p>
        </Link>
    
    )
}

export default MovieSceneItem;