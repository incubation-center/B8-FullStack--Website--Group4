// "use client";
import React from "react";

const DisplayContent = () => {
  return (
    <div className="mt-24 text-center mb-12">
      {/* we found 51 products */}

      <h1 className="text-[#101828] font-medium text-xl ">
        Good news! We’ve found{" "}
        <span className="text-[#12B76A]">51 products</span> for you to take a
        look at.
      </h1>
      <p className="max-w-[900px] text-[#475467] text-lg font-normal mt-5 m-auto">
        Take a look and explore a wide range of options that match your needs.
        Whether it's finding the perfect savings account, investment
        opportunity, or financial service, our collection has something for
        everyone. Start exploring now and discover the perfect fit for your
        financial goals!
      </p>
    </div>
  );
};

export default DisplayContent;
