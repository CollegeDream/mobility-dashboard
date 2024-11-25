import React from "react";

const VanList = ({ vans }) => {
  if (!vans.length) return <p>No van requirements reported.</p>;

  return (
    <ul>
      {vans.map((van, index) => (
        <li key={index}>
          Van needed at <strong>{van.location}</strong> due to{" "}
          <strong>{van.reason}</strong>.
        </li>
      ))}
    </ul>
  );
};

export default VanList;
