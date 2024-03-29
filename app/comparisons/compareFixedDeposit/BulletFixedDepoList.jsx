"use client";
import React from "react";
import data from "./data";

const BulletFixedDepoList = () => {
  const ulStyles = {
    listStyleType: "disc", // Set the list item numbering style to decimal
    paddingLeft: "20px", // Add some left padding for indentation
  };
  return (
    <ul style={ulStyles} className="bodyText mt-6">
      {data.getFixedDepoAcc.getFixedDepoAccList.map((item, index) => (
        <li key={index} className="mt-4">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BulletFixedDepoList;
