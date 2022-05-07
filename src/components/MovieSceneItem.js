import { Link } from 'react-router-dom';
import '../styles/components/MovieSceneItem.scss';


function MovieSceneItem (props) {
    return (
        <>
    <Link to={`/movie/${props.scene.id}`}></Link>
        <div className='item'>
            <img className="image"
                alt={props.scene.movie} 
                src={props.scene.poster}
            />
            <h4>{props.scene.movie}</h4>
            <p>{props.scene.quote}</p>
            <p>{props.scene.year}</p>
        </div>
        </>
    )
}

export default MovieSceneItem;