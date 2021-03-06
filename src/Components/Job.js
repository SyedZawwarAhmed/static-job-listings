import React from "react";
import "../Stylesheets/Job.css";

function Job(props) {
  const languages = props.languages.map((item, index) => (
    <button key={index}
      className="language tablet"
      onClick={() => props.applyFilter(["languages", item])}
    >
      {item}
    </button>
  ));
  return (
    <div  className={props.featured ? "job featured" : "job"}>
      <div key={props.id} className="col-1">
        <img className="logo-img" src={props.logo} alt="" />
        <div className="details">
          <div className="line-1">
            <h3 className="company">{props.company}</h3>
            {props.new ? <button className="new-btn">New!</button> : ""}
            {props.featured ? (
              <button className="featured-btn">Featured</button>
            ) : (
              ""
            )}
          </div>
          <div className="line-2">
            <h1 className="position">{props.position}</h1>
          </div>
          <div className="line-3">
            <span className="posted-at">{props.postedAt}</span>
            <span className="dot">.</span>
            <span className="contract">{props.contract}</span>
            <span className="dot">.</span>
            <span className="location">{props.location}</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="col-2">
        <button
          className="role tablet"
          onClick={() => props.applyFilter(["role", props.role])}
        >
          {props.role}
        </button>
        <button
          className="level tablet"
          onClick={() => props.applyFilter(["level", props.level])}
        >
          {props.level}
        </button>
        {languages}
      </div>
    </div>
  );
}

export default Job;
