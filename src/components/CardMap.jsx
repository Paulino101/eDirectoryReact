import React from "react";
import Card from "./Card";

function CardMap({ data }) {
  return (
    <div className="employeeCard">
      {data.map((d) => {
        <Card name={d.name.first} />;
      })}
    </div>
  );
}

export default CardMap;
