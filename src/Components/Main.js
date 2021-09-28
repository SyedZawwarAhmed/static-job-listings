import React, { useState, useEffect } from "react";
import Job from "./Job";
import "../Stylesheets/Main.css";
import FilterBlock from "./FilterBlock";

function Main() {
  const [data, setData] = useState([]);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [filter, setFilter] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const applyFilter = (newFilter) => {
    setIsFilterApplied(true);
    if (!filter.map((item) => item[1]).includes(newFilter[1])) {
      setFilter((filter) => [...filter, newFilter]);
    }
    setFilter((filter) => {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        let filterPassed = true;

        for (let j = 0; j < filter.length; j++) {
          const filterItem = filter[j];
          if (filterItem[0] === "languages") {
            filterPassed = item[filterItem[0]].includes(filterItem[1]);
          } else {
            filterPassed = filterItem[1] === item[filterItem[0]];
          }

          if (!filterPassed) break;
        }
        item.filterApplied = filterPassed;
      }
      return filter;
    });
  };

  const removeFilter = () => {
    setIsFilterApplied(false);
    setFilter([]);
  };

  const removeOneFilter = (filterToBeRemoved) => {
    if (filter.length === 1) {
      removeFilter();
    }
    setFilter((filter) => filter.filter((item) => item !== filterToBeRemoved));

    setFilter((filter) => {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        let filterPassed = true;

        for (let j = 0; j < filter.length; j++) {
          const filterItem = filter[j];
          if (filterItem[0] === "languages") {
            filterPassed = item[filterItem[0]].includes(filterItem[1]);
          } else {
            filterPassed = filterItem[1] === item[filterItem[0]];
          }

          if (!filterPassed) break;
        }
        item.filterApplied = filterPassed;
      }
      return filter;
    });
  };

  const jobs = data
    .filter((item) => (!isFilterApplied ? item : item.filterApplied))
    .map((item, index) => (
      <Job
        key={index}
        id={item.id}
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
        filterApplied={item.filterApplied}
        isFilterApplied={isFilterApplied}
      />
    ));

  return (
    <div className="main">
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
