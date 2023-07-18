"use client";
import BankList from "@/app/components/BankList";
import Faq from "@/app/components/Faq";
import Link from "next/link";
import data from "./data.json"
import React from "react";
import CompareLoansForm from "./CompareLoansForm";
import ShowContent from "./ShowContent";
import BankInfoLoans from "./BankInfoLoans";
import ChooseSavAccList from "./ChooseSavAccListLoans";
import KnowSaveAcc from "./KnowSaveAcc";
import SocialLink from "@/app/components/SocialLink";
import TableContentLoans from "./TableContentLoans";
import SavingLineChart from "./SavingLineChart";
import ExchangeRateChart from "./ExchangeRateChart";
import EstimateCompareLoans from "./EstimateCompareLoans";
// import CompareSavingAccForm from "./CompareSaveAccForm";
// import DisplayContent from "./DisplayContent";

const CompareLoan = () => {
  return (
    <div className="pt-16 sm:pt-16 md:pt-20">
      <div className="sect2 py-16 px-4 sm:px-4 md:px-28">
        {/* heading */}
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">Loan</p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Find the Best Financing Option for Your Needs
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            Our Loan Comparison Tool empowers you to make confident financial
            decisions by comparing loan options from multiple banks and
            financial institutions in real-time.
          </p>
        </div>
        {/* fuction compare loan */}
        <CompareLoansForm />
        {/* we found 51 products */}
        <div className="text-center mt-24 flex flex-col justify-center items-center">
          <h1 className="text-[#101828] font-medium text-xl">
            Good news! We’ve found{" "}
            <span className="text-[#12B76A]">51 products</span> for you to take
            a look at.
          </h1>
          <p className="text-[#475467] text-lg font-normal mt-5 max-w-[770px]">
            Take a look and explore a wide range of options that match your
            needs. Whether it's finding the perfect loan, investment
            opportunity, or financial service, our collection has something for
            everyone. Start exploring now and discover the perfect fit for your
            financial goals!
          </p>
        </div>
        {/* Saving line chart */}
        <div className="text-center mt-16 mb-12">
          <h1 className="text-[#101828] font-semibold text-3xl ">
            Saving Line Chart
          </h1>
          <p className="text-[#667085] font-normal text-lg mt-6">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
        </div>
        <SavingLineChart />
        {/* Exchange rate */}
        <div className="text-center mt-16 mb-12">
          <h1 className="text-[#101828] font-semibold text-3xl ">
            Exchange Rate
          </h1>
          <p className="text-[#667085] font-normal text-lg mt-6">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
        </div>
        <ExchangeRateChart />
        {/* estimate your saving */}
        {/* heading */}
        <div className=" flex flex-col justify-center items-center mt-16">
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
        </div>
        <EstimateCompareLoans />
        <TableContentLoans />
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default CompareLoan;
