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
        <p className="title">
          Mission Ids: <span className="value">{props.data.mission_id}</span>
        </p>
        <p className="title">
          Launch Year: <span className="value">{props.data.launch_year}</span>
        </p>
        <p className="title">
          Successful Launch:{" "}
          <span className="value">{props.data.launch_success}</span>
        </p>
        <p className="title">
          Successful Landing:{" "}
          <span className="value">{props.data.launch_landing}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
