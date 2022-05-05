
function MovieFilters (props) {
return <section>
    <form>
    <label>Movie</label>
    <input 
    type="text"
    name="movie"
    onChange={props.handleFilterMovie}
    value={props.filterMovies}
    />
    </form>
    </section>
}

export default MovieFilters;