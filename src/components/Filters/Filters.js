import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import FilterLayout from "./FilterLayout";

import {
  YearsValue,
  LaunchOptionsValue,
  LandingOtionsValue,
  FilterConstructor,
  FilterTypes,
} from "../../models/Filters";

import "./Filters.css";
import { Strings } from "../../strings/Strings";

function Filters(props) {
  // Initial objects for filter vlaues
  const yearsList = YearsValue.map(
    (value) => new FilterConstructor(value, FilterTypes.Year)
  );
  const launchOptionsList = LaunchOptionsValue.map(
    (value) => new FilterConstructor(value, FilterTypes.Launch)
  );
  const landingOtionsList = LandingOtionsValue.map(
    (value) => new FilterConstructor(value, FilterTypes.Landing)
  );

  const [yearsFilterList, setYearsFilterList] = useState(yearsList);
  const [launchOptions, setLaunchOptions] = useState(launchOptionsList);
  const [landingOptions, setLandingOptions] = useState(landingOtionsList);

  useEffect(() => {
    const allFilters = {
      launch_year: yearsFilterList.find((value) => value.isActive),
      launch_success: launchOptions.find((value) => value.isActive),
      land_success: landingOptions.find((value) => value.isActive),
    };
    props.handleFilter(allFilters);
  }, [yearsFilterList, launchOptions, landingOptions]);

  // Handle filter selection
  function handleSelect({ type, value }) {
    let selectedValue;
    switch (type) {
      case FilterTypes.Year:
        selectedValue = yearsFilterList.map((data) =>
          data.value === value
            ? { ...data, isActive: true }
            : { ...data, isActive: false }
        );
        setYearsFilterList(selectedValue);
        break;
      case FilterTypes.Launch:
        selectedValue = launchOptions.map((data) =>
          data.value === value
            ? { ...data, isActive: true, value: data.value }
            : { ...data, isActive: false }
        );
        setLaunchOptions(selectedValue);
        break;
      case FilterTypes.Landing:
        selectedValue = landingOptions.map((data) =>
          data.value === value
            ? { ...data, isActive: true, value: data.value }
            : { ...data, isActive: false }
        );
        setLandingOptions(selectedValue);
        break;

      default:
        break;
    }
  }

  return (
    <div className="filters-wrapper">
      <div className="header">{Strings.Filters}</div>
      <div className="years-filter">
        <FilterLayout
          data={yearsFilterList}
          handleSelect={handleSelect}
          title={Strings.LaunchYear}
        />
      </div>
      <div className="launch-filter">
        <FilterLayout
          data={launchOptions}
          handleSelect={handleSelect}
          title={Strings.SuccessfulLaunch}
        />
      </div>
      <div className="landing-filter">
        <FilterLayout
          data={landingOptions}
          handleSelect={handleSelect}
          title={Strings.SuccessfulLand}
        />
      </div>
    </div>
  );
}

// Mandatory Props
Filters.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filters;
