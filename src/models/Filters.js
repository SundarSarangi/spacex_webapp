export const YearsValue = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
];

export const LaunchOptionsValue = ["True", "False"];
export const LandingOtionsValue = ["True", "False"];

export class FilterConstructor {
  value = null;
  isActive = false;
  type = null;

  constructor(value, type) {
    this.value = value;
    this.type = type;
  }
}

export const FilterTypes = {
  Year: "Year",
  Launch: "Launch",
  Landing: "Landing",
};
