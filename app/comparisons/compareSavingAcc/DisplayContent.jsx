"use client";
import React from "react";

const DisplayContent = () => {
  return (
    <div className="mt-24 text-center">
      {/* we found 51 products */}

      <h1 className="text-[#101828] font-medium text-xl ">
        Good news! We’ve found{" "}
        <span className="text-[#12B76A]">51 products</span> for you to take a
        look at.
      </h1>
      <p className="max-w-[900px] text-[#475467] text-lg font-normal mt-5 m-auto">
        Our platform keeps you updated on the most current and exciting
        promotions from banks and financial institutions in Cambodia.
      </p>
    </div>
  );
};

export default DisplayContent;
