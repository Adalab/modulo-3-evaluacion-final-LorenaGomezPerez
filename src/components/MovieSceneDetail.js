import { Link } from 'react-router-dom';
import '../styles/components/MovieSceneDetail.scss';

function MovieSceneDetail (props) {
    return (
        <section className='detail' >
            <Link to={'/'}>Inicio</Link>
        <img className='image'
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