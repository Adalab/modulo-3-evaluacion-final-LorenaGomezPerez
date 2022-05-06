function FilterMovie (props) {

    const handleChange = (ev) => {
        props.handleFilterMovie(ev.target.value);
    };

    return (
    <form onSubmit={props.handleSubmit}>
        <label>Movie</label>
        <input 
            type="text"
            name="movie"
            onChange={handleChange}
            value={props.filterMovies}
            />
        </form>
    )
}

export default FilterMovie;