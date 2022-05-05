
function FilterYear (props) {

    const handleChange = (ev) => {
        props.handleFilterYear(ev.target.value);
    };
    const renderYears = () =>{
        return props.uniqueYears.map((year, index)=>{
            return (
            <option
                key={index}
                value={year}>
                
                {year}
            </option>
            );
        });
    };
return ( 
        <>
        <label htmlFor="year">Year</label>
        <select name="year" onChange={handleChange} value={props.FilterYear}>
            <option>All</option>
            {renderYears()}
            </select>
        </>
    );
}

export default FilterYear;