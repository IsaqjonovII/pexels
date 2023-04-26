import React from "react";
import Card from "../Card";

const RenderCards = ({ data }) => {
  return (
    <div className="img__cards__wrapper">
      {data.map(({ id, ...imageProps }) => (
        <Card key={id} {...imageProps} />
      ))}
    </div>
  );
};

export default RenderCards;
