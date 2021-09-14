import React, { useState, useEffect } from "react";
import Job from "./Job";
import "../Stylesheets/Main.css"

function Main() {
  const [data, setData] = useState([]);
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
    />
  ));

  return (
    <div className="main">
      <div className="jobs">{jobs}</div>
    </div>
  );
}

export default Main;
