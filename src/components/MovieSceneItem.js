import { Link } from "react-router-dom";
import "../styles/components/MovieSceneItem.scss";

function MovieSceneItem(props) {
  return (
    <>
      <img className="image" alt={props.scene.movie} src={props.scene.poster} />
      <h4>{props.scene.movie}</h4>
      <p>{props.scene.quote}</p>
      <p>{props.scene.year}</p>
      <span className="moreInfo">
        <Link className="moreInfo__infoLink" to={`/movie/${props.scene.id}`}>
          More information
        </Link>
      </span>
    </>
  );
}

export default MovieSceneItem;
