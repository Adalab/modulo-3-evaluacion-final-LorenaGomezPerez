import "../styles/components/Filters.scss";

function FilterMovie(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };

  return (
    <>
      <label>Movie</label>
      <input
        className="inputMovie"
        type="text"
        name="movie"
        onChange={handleChange}
        value={props.filterMovies}
      />
    </>
  );
}

export default FilterMovie;
