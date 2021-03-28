import React, { Component } from "react";

import {
  getSpaceXData,
  getFilteredSpaceXData,
} from "../../services/SpaceXService";

import "./SpaceXLanding.css";

import { Spinner, SpinnerSize } from "@fluentui/react";

import CardsContainer from "../CardsContainer/CardsContainer";
import Filters from "../Filters/Filters";

class SpaceXLanding extends Component {
  state = {
    spaceXData: [],
    isLoading: false,
    noData: false,
    noSearchData: false,
  };

  componentDidMount() {
    this.getSpaceXData();
  }

  getSpaceXData = (reqParams) => {
    this.setState((prevState) => ({ ...prevState, isLoading: true }));
    if (reqParams) {
      getFilteredSpaceXData(reqParams)
        .then((data) => {
          if (data) {
            this.setState({ spaceXData: data });
          } else {
            this.setState((prevState) => ({
              ...prevState,
              noSearchData: true,
            }));
          }
        })
        .catch((error) => alert("An unexpected error has occured"))
        .finally(() =>
          this.setState((prevState) => ({ ...prevState, isLoading: false }))
        );
    } else {
      getSpaceXData()
        .then((data) => {
          if (data) {
            this.setState({ spaceXData: data });
          } else {
            this.setState((prevState) => ({ ...prevState, noData: true }));
          }
        })
        .catch((error) => alert("An unexpected error has occured"))
        .finally(() =>
          this.setState((prevState) => ({ ...prevState, isLoading: false }))
        );
    }
  };

  handleFilter = (ev) => {
    // console.log(ev);
    // check for each
    let requestParams = "";
    Object.entries(ev).forEach(([key, value]) => {
      if (value) {
        requestParams
          ? (requestParams += `&${key}=${value.value}`)
          : (requestParams += `${key}=${value.value}`);
      }
    });

    console.log(requestParams);
    this.getSpaceXData(requestParams);
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
              <Spinner size={SpinnerSize.large} label="Loading..." />
            ) : this.state.spaceXData.length ? (
              <CardsContainer data={this.state.spaceXData} />
            ) : (
              <div className="no-data">
                {this.state.noSearchData
                  ? "No data found with provided search inputs. Please alter your search and try again."
                  : "No data found."}
              </div>
            )}
          </div>
        </>
      </div>
    );
  }
}

export default SpaceXLanding;
