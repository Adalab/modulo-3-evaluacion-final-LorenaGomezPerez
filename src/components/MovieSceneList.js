import MovieSceneItem from "./MovieSceneItem";
import "../styles/components/MovieSceneList.scss";

// Componente que pinta toda la lista de películas

function MovieSceneList(props) {
  const htmlTasks = props.MoviesFilters.map((scene) => {
    return (
      <li className="sectionList__movieList" key={scene.id}>
        <MovieSceneItem scene={scene} />
      </li>
    );
  });

  return (
    <section className="sectionList">
      <ul className="sectionList__movieContainer">{htmlTasks}</ul>
    </section>
  );
}

export default MovieSceneList;
