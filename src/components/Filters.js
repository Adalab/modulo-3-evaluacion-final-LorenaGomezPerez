import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";
import '../styles/components/Filters.scss';

function Filters (props) {
return (
    <section className="filters">
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