import "../styles/components/Filters.scss";

function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };
  const renderYears = () => {
    return props.uniqueYears.map((year, index) => {
      return (
        <option key={index} value={year}>
          {year}
        </option>
      );
    });
  };
  return (
    <>
      <label htmlFor="year">Year</label>
      <select
        className="select"
        name="year"
        onChange={handleChange}
        value={props.FilterYear}
      >
        <option value="all">All</option>
        {renderYears()}
      </select>
    </>
  );
}

export default FilterYear;
