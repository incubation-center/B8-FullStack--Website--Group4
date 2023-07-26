// "use client";
import React from "react";
import datacompareloans from "./datacompareloans";

const NumListGetLoan = () => {
  const olStyles = {
    listStyleType: "decimal", // Set the list item numbering style to decimal
    paddingLeft: "20px", // Add some left padding for indentation
  };

  return (
    <ol style={olStyles} className="bodyText mt-6">
      {datacompareloans.getLoan.numListGetLoan.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
export default NumListGetLoan;
