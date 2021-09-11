import React, { useState, useEffect } from "react";

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
  return (
    <div className="main">
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}

export default Main;
