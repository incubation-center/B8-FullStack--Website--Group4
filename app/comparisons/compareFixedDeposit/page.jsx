"use client";
import React from "react";
import Faq from "../../components/Faq";
import CompareFixedDepoForm from "./CompareFixedDepoForm";
import TableContentFixedDepo from "./TableContentFixedDepo";


const CompareFixedDeposit = () => {
  return (
    <div className="pt-20">
      <div className="sect2 pt-16 px-4 sm:px-4 md:px-28">
        {/* heading */}
        <div className=" flex flex-col justify-center items-center">
          <p className="text-red-600 text-sm font-medium text-center">
            Fixed Deposit
          </p>
          <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
            Secure Your Savings with Fixed Deposit Accounts
          </p>
          <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
            Our Fixed Deposit Accounts offer a reliable and risk-free investment
            option to grow your savings. With competitive interest rates and
            flexible tenure options, you can watch your money grow steadily over
            time.
          </p>
        </div>
        {/* function compare fixed deposit */}
        <CompareFixedDepoForm />
        {/* <PromotionOffer /> */}
        <TableContentFixedDepo />
      </div>
      {/* frequently ask questions */}
      <Faq />
    </div>
  );
};

export default CompareFixedDeposit;
