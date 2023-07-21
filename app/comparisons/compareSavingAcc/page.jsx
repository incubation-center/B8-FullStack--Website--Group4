"use client";
import Faq from "@/app/components/Faq";
import React from "react";
import CompareSavingAccForm from "./CompareSaveAccForm";
import DisplayContent from "./DisplayContent";
import TableOfContent from "./TableOfContent";
import Chart from "./Chart";
import ChartComponent from "./ChartBar";
import ChartFilter from "./ChartFilter";
import FeatureOfferBank from "./FeatureOfferBank";

const CompareSavingAcc = () => {
  return (
    <div className="pt-16 sm:pt-16 md:pt-20 ">
      <div className="sect2 py-16 px-4 sm:px-4 md:px-28">
        {/* heading */}
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">
            Saving Accounts
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Find the Best Fit for Your Financial Goals
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div>

        {/* fuction compare saving accounts */}
        <CompareSavingAccForm />
        {/* test display banks selected */}

        <DisplayContent />
        {/* fetch banks data */}
        <FeatureOfferBank />
        <Chart />
        <ChartComponent />
        <ChartFilter />
        <TableOfContent />
      </div>
      <Faq />
    </div>
  );
};

export default CompareSavingAcc;
