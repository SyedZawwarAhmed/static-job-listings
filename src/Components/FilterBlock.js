import React from "react";
import "../Stylesheets/FilterBlock.css";
import Filter from "./Filter";

function FilterBlock(props) {
  return (
    <div className="filter-block">
      <Filter filter={props.filter} removeOneFilter={props.removeOneFilter} />
      <span className="clear" onClick={() => props.removeFilter()}>
        Clear
      </span>
    </div>
  );
}

export default FilterBlock;
