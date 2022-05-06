import { Link } from 'react-router-dom';

function MovieSceneDetail (props) {
    return (
        <Link to={'/'}>
        <section key={props.movieFound.index}>
        <img width="100" height="100" 
            alt={props.movieFound.movie} 
            src={props.movieFound.poster}
            />
            <h4>{props.movieFound.movie}</h4>
            <p>{props.movieFound.quote}</p>
            <p>{props.movieFound.director}</p>
            <p>{props.movieFound.audio}</p> 
        </section> 
        </Link>
    );
}

export default MovieSceneDetail;