import React, { Component } from "react";

import {
  getSpaceXData,
  getFilteredSpaceXData,
} from "../../services/SpaceXService";

import "./SpaceXLanding.css";

import { Strings } from "../../strings/Strings";

import { Spinner, SpinnerSize } from "@fluentui/react";

import CardsContainer from "../CardsContainer/CardsContainer";
import Filters from "../Filters/Filters";

class SpaceXLanding extends Component {
  constructor() {
    super();
    this.state = {
      spaceXData: [],
      isLoading: false,
      noData: false,
      noSearchData: false,
      requestParams: null,
    };
  }

  componentDidMount() {
    this.setState((prevState) => ({ ...prevState, isLoading: true }));
    getSpaceXData()
      .then((data) => {
        if (data && data.length) {
          this.setState({ spaceXData: data });
        } else {
          this.setState((prevState) => ({
            ...prevState,
            spaceXData: [],
            noData: true,
          }));
        }
      })
      .catch(() => alert(Strings.ErrorMessage))
      .finally(() =>
        this.setState((prevState) => ({
          ...prevState,
          isLoading: false,
        }))
      );
  }

  componentDidUpdate(prevProps, prevState) {
    // Get new data when filters are applied (State has changed)
    if (
      this.state.requestParams &&
      prevState.requestParams !== this.state.requestParams
    ) {
      this.setState((prevState) => ({ ...prevState, isLoading: true }));
      getFilteredSpaceXData(this.state.requestParams)
        .then((data) => {
          if (data && data.length) {
            this.setState({ spaceXData: data });
          } else {
            this.setState((prevState) => ({
              ...prevState,
              spaceXData: [],
              noSearchData: true,
            }));
          }
        })
        .catch(() => alert(Strings.ErrorMessage))
        .finally(() =>
          this.setState((prevState) => ({
            ...prevState,
            isLoading: false,
          }))
        );
    }
  }

  // For handling changes in filter parameters
  handleFilter = (ev) => {
    let requestParams = "";
    Object.entries(ev).forEach(([key, _value]) => {
      if (_value) {
        if (key === "launch_success" || key === "land_success") {
          _value = { ..._value, value: _value.value.toLowerCase() };
        }

        requestParams
          ? (requestParams += `&${key}=${_value.value}`)
          : (requestParams += `${key}=${_value.value}`);
      }
    });

    this.setState({ requestParams });
  };

  render() {
    return (
      <div className="main-content">
        <>
          <div className="sidebar">
            <Filters handleFilter={this.handleFilter} />
          </div>
          <div className="content">
            {this.state.isLoading ? (
              <Spinner size={SpinnerSize.large} label={Strings.Loading} />
            ) : this.state.spaceXData.length ? (
              <CardsContainer data={this.state.spaceXData} />
            ) : (
              <div className="no-data">
                {this.state.noSearchData
                  ? Strings.NoSearchData
                  : Strings.NoDataFound}
              </div>
            )}
          </div>
        </>
      </div>
    );
  }
}

export default SpaceXLanding;
