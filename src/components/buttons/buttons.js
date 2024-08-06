import React from "react";
import OnList from "../buttons-list/btn-list";

const Onbutton = ({data,showId}) => {
  const elements = data.map((el, index) => (
    <OnList key={index} {...el} showId={showId}/>
  ));

  return <div>{elements}</div>;
};

export default Onbutton;
