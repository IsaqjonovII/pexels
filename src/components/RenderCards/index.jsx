import React from "react";
import Card from "../Card";

const RenderCards = ({ data }) => {
  return (
    <div className="img__cards__wrapper">
      {data.length ? null : <p className="no__data--label">No Images found <br /> Search for other images</p>}
      {data.map((image) => (
        <Card {...image} key={image.id} />
      ))}
    </div>
  );
};

export default RenderCards;
