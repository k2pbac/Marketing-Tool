import React from "react";

import "./UserDisplay.scss";

const UserDisplay = (props) => {
  const [center, setCenter] = useState({
    lat: 43.76406519492777,
    lng: -79.33268017418551,
  });

  const [zoom, setZoom] = useState(12);

  return (
    <div>
      <BranchMap zoom={zoom} center={center} />
    </div>
  );
};

export default UserDisplay;
