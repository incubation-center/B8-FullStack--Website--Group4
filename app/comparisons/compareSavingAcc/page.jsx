"use client";
import BankList from "@/app/components/BankList";
import Faq from "@/app/components/Faq";
import Link from "next/link";
import BankInfo from "./BankInfo";
import data from "/public/data.json";
import React, { useEffect } from "react";
import ChooseSavAccList from "./ChooseSavAccList";
import KnowSaveAcc from "./KnowSaveAcc";
// import SocialLink from "./SocialLink";
import CompareSavingAccForm from "./CompareSaveAccForm";
import DisplayContent from "./DisplayContent";
import TableOfContent from "./TableOfContent";
import Chart from "./Chart";
import ExchangeRate from "./ExchangeRate";
import EstimateSaving from "./EstimateSaving";
import ChartComponent from "./ChartBar";
import ChartFilter from "./ChartFilter";
import PromotionOffer from "@/app/components/PromotionOffer";
import Image from "next/image";
import FeatureOfferBank from "./FeatureOfferBank";
// import Selection from "@/app/components/Selection";
// import ExampleSelection from "@/app/components/ExampleSelection";

const CompareSavingAcc = () => {
  // scroll function table of content
  // const tableContent = "text-gray-500 font-semibold text-base";
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
        {/* estimate your saving */}
        {/* heading */}
        {/* <div className=" flex flex-col justify-center items-center mt-16">
          <p className="text-red-600 text-sm font-medium text-center">
            Features
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Cutting-edge features for comparisons
          </p>
          <p className=" text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            We provide comprehensive and up-to-date information, empowering you
            to make informed decisions based on your unique needs and
            preferences.
          </p>
        </div> */}
        {/* estimate saving form */}
        {/* <EstimateSaving /> */}
        {/* <FeatureOfferBank /> */}
        {/* <PromotionOffer /> */}
        {/* <DisplayContent /> */}

        {/* table of content and best savings... */}
        <TableOfContent />
      </div>
      <Faq />
    </div>
  );
};

export default CompareSavingAcc;
