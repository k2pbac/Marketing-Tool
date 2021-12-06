import React from "react";

const LocationContext = React.createContext({
  location: "",
  setLocation: (location) => location,
  updateLocation: false,
  setUpdateLocation: (check) => check,
});

export default LocationContext;
