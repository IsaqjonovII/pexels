import React from "react";
import Card from "../Card"

const RenderCards = ({ data }) => {
  return (
    <div className="img__cards__wrapper">
      {data.map((image) => (
        <Card {...image} key={image.id} />
      ))}
    </div>
  );
};

export default RenderCards;
