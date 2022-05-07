import '../styles/components/Filters.scss';

function FilterMovie (props) {

    const handleChange = (ev) => {
        props.handleFilterMovie(ev.target.value);
    };

    return (
    <form className="formMovie" onSubmit={props.handleSubmit}>
        <label>Movie</label>
        <input className='inputMovie'
            type="text"
            name="movie"
            onChange={handleChange}
            value={props.filterMovies}
            />
        </form>
    )
}

export default FilterMovie;