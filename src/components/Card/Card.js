import React from "react";
import { Strings } from "../../strings/Strings";

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
          {Strings.MissionIds}:{" "}
          {!props.data.mission_id.length && (
            <span class="no-mission">{Strings.NoMissionIds}</span>
          )}
        </p>
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
          {Strings.LaunchYear}:{" "}
          <span className="value">{props.data.launch_year}</span>
        </p>
        <p className="title">
          {Strings.SuccessfulLaunch}:{" "}
          <span className="value">
            {props.data.launch_success ? Strings.Yes : Strings.No}
          </span>
        </p>
        <p className="title">
          {Strings.SuccessfulLand}:{" "}
          <span className="value">
            {props.data.launch_success ? Strings.Yes : Strings.No}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
