import React from "react";

const OnList = ({ className, text, showId }) => {
  return <button onClick={showId} className={className}>{text}</button>;
};

export default OnList;
