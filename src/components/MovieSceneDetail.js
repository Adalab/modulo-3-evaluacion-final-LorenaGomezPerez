import { Link } from 'react-router-dom';

function MovieSceneDetail (props) {
    return (
        <section >
            <Link to={'/'}>Inicio</Link>
        <img width="100" height="100" 
            alt={props.movieFound.movie} 
            src={props.movieFound.poster}
            />
            <h4>{props.movieFound.movie}</h4>
            <p>{props.movieFound.quote}</p>
            <p>{props.movieFound.director}</p>
            <a
            href={props.movieFound.audio}
            target="blank">Listen audio</a>
            
            </section>
    );
}

export default MovieSceneDetail;