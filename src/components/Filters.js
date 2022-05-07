import FilterMovie from "./FilterMovie";
import FilterYear from "./FilterYear";
import "../styles/components/Filters.scss";

function Filters(props) {
  return (
    <section className="filters">
      <form className="formMovie" onSubmit={props.handleSubmit}>
        <FilterMovie
          handleFilterMovie={props.handleFilterMovie}
          filterMovies={props.filterMovies}
        />
        <FilterYear
          uniqueYears={props.uniqueYears}
          handleFilterYear={props.handleFilterYear}
          filterYears={props.filterYears}
        />
      </form>
    </section>
  );
}

export default Filters;
