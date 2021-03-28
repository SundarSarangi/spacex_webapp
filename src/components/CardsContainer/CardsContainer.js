import React from "react";

import Card from "../Card/Card";

import "./CardsContainer.css";

function CardsContainer(props) {
  return (
    <div>
      <div className="cards-container">
        {props.data && props.data.length
          ? props.data.map((_data) => {
              return (
                <div className="card-wrapper" key={_data.flight_number}>
                  <Card data={_data} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default CardsContainer;
