"use client";
import React from "react";
import data from "./data";

const NumListFixedDepo = () => {
  const olStyles = {
    listStyleType: "decimal", // Set the list item numbering style to decimal
    paddingLeft: "20px", // Add some left padding for indentation
  };

  return (
    <ol style={olStyles} className="bodyText mt-6">
      {data.aboutFixedDepoAcc.aboutFixedDepoAccList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};

export default NumListFixedDepo;
