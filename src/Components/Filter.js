import React from "react";
import "../Stylesheets/Filter.css";

function Filter(props) {
  const filter = props.filter.map((item, index) => (
    <span key={index} className="filter-tablet">
      <span className="filter-name">{item[1]}</span>
      <button className="filter-close" onClick={() => props.removeOneFilter(item)}>x</button>
    </span>
  ));
  return <div className="filter">{filter}</div>;
}

export default Filter;
