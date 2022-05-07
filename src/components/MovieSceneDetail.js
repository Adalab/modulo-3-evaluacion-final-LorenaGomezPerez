import { Link } from "react-router-dom";
import "../styles/components/MovieSceneDetail.scss";

function MovieSceneDetail(props) {
  return (
    <main className="mainDetail">
      <section className="mainDetail__detail">
        <span className="back">
          <Link className="back__backLink" to={"/"}>
            Back
          </Link>
        </span>

        <img
          className="image"
          alt={props.movieFound.movie}
          src={props.movieFound.poster}
        />
        <h4>{props.movieFound.movie}</h4>
        <p>{props.movieFound.quote}</p>
        <p className="textDetail">{props.movieFound.director}</p>
        <span>
          <a className="audio" href={props.movieFound.audio} target="blank">
            Listen audio
          </a>
        </span>
      </section>
    </main>
  );
}

export default MovieSceneDetail;
