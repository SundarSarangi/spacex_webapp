import React from "react";
import PropTypes from "prop-types";

import "./Filter.css";

const Filter = (props) => {
  return (
    <div
      className={`filter ${props.value.isActive ? "active-filter" : null}`}
      onClick={() => props.handleSelect(props.value)}
    >
      {props.value.value}
    </div>
  );
};

Filter.propTypes = {
  handleSelect: PropTypes.func,
  value: PropTypes.object,
};

export default Filter;
