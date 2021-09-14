import React from "react";
import "../Stylesheets/Job.css";

function Job(props) {
  const languages = props.languages.map((item) => (
    <button className="language tablet">{item}</button>
  ));
  return (
    <div className={props.featured ? "job featured" : "job"}>
      <div className="col-1">
        <img src={props.logo} />
        <div className="details">
          <div className="line-1">
            <h3 className="company">{props.company}</h3>
            {props.new ? <button className="new-btn">New!</button> : ""}
            {props.featured ? <button className="featured-btn">Featured</button> : ""}
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
      <div className="col-2">
        <button className="role tablet">{props.role}</button>
        <button className="level tablet">{props.level}</button>
        {languages}
      </div>
    </div>
  );
}

export default Job;
