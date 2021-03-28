import { handleResponse, handleError } from "./ServiceUtils";

const baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";

export function getSpaceXData() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getFilteredSpaceXData(reqParams) {
  return fetch(`${baseUrl}&${reqParams}`)
    .then(handleResponse)
    .catch(handleError);
}
