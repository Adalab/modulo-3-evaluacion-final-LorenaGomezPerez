function FilterMovie (props) {
    return <>
    <label>Movie</label>
    <input 
    type="text"
    name="movie"
    onChange={props.handleFilterMovie}
    value={props.filterMovies}
    />
    </>

}

export default FilterMovie;