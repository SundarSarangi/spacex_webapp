import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src={props.data.links.mission_patch}
          alt={props.data.mission_name}
        />
      </div>
      <p className="mission-header">
        {props.data.mission_name} #{props.data.flight_number}
      </p>
      <div className="details-section">
        <p className="title">Mission Ids: </p>
        {props.data.mission_id.length ? (
          <ul>
            {props.data.mission_id.map((data) => {
              return (
                <li className="value" key={data}>
                  {data}
                </li>
              );
            })}
          </ul>
        ) : null}

        <p className="title">
          Launch Year: <span className="value">{props.data.launch_year}</span>
        </p>
        <p className="title">
          Successful Launch:{" "}
          <span className="value">
            {props.data.launch_success ? "Yes" : "No"}
          </span>
        </p>
        <p className="title">
          Successful Landing:{" "}
          <span className="value">
            {props.data.launch_success ? "Yes" : "No"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
