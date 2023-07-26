"use client";
import React from "react";
// import data from "./data";
import datasavingacc from "./datasavingacc";

const ChooseSavAccList = () => {
  const olStyles = {
    listStyleType: "decimal", // Set the list item numbering style to decimal
    paddingLeft: "20px", // Add some left padding for indentation
  };

  return (
    <ol style={olStyles} className="bodyText mt-6">
      {datasavingacc.savingAcc.saveList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
export default ChooseSavAccList;
