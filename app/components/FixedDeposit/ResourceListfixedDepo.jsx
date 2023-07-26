// "use client";
import React from "react";
import datafixeddepo from "./datafixeddepo";

const ResourceListfixedDepo = () => {
  const olStyles = {
    listStyleType: "decimal", // Set the list item numbering style to decimal
    paddingLeft: "20px", // Add some left padding for indentation
  };

  return (
    <ol style={olStyles} className="bodyText mt-6">
      {datafixeddepo.otherResources.resourceList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
export default ResourceListfixedDepo;
