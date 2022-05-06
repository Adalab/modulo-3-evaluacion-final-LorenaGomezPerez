function FilterMovie (props) {

    const handleChange = (ev) => {
        props.handleFilterMovie(ev.target.value);
    };

    return <>
    <label>Movie</label>
    <input 
    type="text"
    name="movie"
    onChange={handleChange}
    value={props.filterMovies}
    />
    </>

}

export default FilterMovie;