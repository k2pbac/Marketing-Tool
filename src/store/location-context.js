import React from "react";

const LocationContext = React.createContext({
  location: "",
  setLocation: (location) => location,
});

export default LocationContext;
