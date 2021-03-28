import React from "react";

import Filter from "./Filter";

import PropTypes from "prop-types";

const FilterLayout = (props) => {
  return (
    <>
      <div className="filter-header">
        <p>{props.title}</p>
      </div>
      <div class="filter-content">
        {props.data.map((_data) => (
          <Filter
            key={_data.value}
            value={_data}
            handleSelect={props.handleSelect}
            title="Years"
          />
        ))}
      </div>
    </>
  );
};

FilterLayout.propTypes = {
  title: PropTypes.string,
};

export default FilterLayout;
