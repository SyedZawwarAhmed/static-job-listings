import React, { useState, useEffect } from "react";
import Job from "./Job";
import "../Stylesheets/Main.css";
import FilterBlock from "./FilterBlock";

function Main() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const applyFilter = (newFilter) => {
    setIsFilterApplied(true);
    setFilter((filter) => [...filter, newFilter]);
  };

  const removeFilter = () => {
    setIsFilterApplied(false);
    setFilter([]);
  };

  const removeOneFilter = (filterToBeRemoved) => {
    if (filter.length === 1) {
      removeFilter();
    }
    setFilter(filter => filter.filter(item => item !== filterToBeRemoved));
  };

  const jobs = data.map((item) => (
    <Job
      company={item.company}
      logo={item.logo}
      new={item.new}
      featured={item.featured}
      position={item.position}
      role={item.role}
      level={item.level}
      postedAt={item.postedAt}
      contract={item.contract}
      location={item.location}
      languages={item.languages}
      tools={item.tools}
      applyFilter={applyFilter}
    />
  ));

  return (
    <div className="main">
      <header></header>
      {isFilterApplied ? (
        <FilterBlock
          filter={filter}
          removeFilter={removeFilter}
          removeOneFilter={removeOneFilter}
        />
      ) : (
        ""
      )}
      <div className="jobs">{jobs}</div>
    </div>
  );
}

export default Main;
