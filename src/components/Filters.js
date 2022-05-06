import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

function Filters (props) {
return (
    <section>
        <FilterMovie
                handleFilterMovie = {props.handleFilterMovie}
                filterMovies = {props.filterMovies}/>
        <FilterYear
                uniqueYears = {props.uniqueYears}
                handleFilterYear = {props.handleFilterYear}
                filterYears = {props.filterYears}/> 
        
    </section>
    );
}

export default Filters;