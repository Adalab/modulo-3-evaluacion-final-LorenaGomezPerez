import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";

function Filters (props) {
return <section>
    <form>
        <FilterMovie
            handleFilterMovie = {props.handleFilterMovie}/>
        <FilterYear
            uniqueYears = {props.uniqueYears}
            handleFilterYear = {props.handleFilterYear}/> 
    </form>
    </section>
}

export default Filters;