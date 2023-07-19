import React, { useEffect, useState } from "react";
import Link from "next/link";
import BankInfoLoans from "./BankInfoLoans";
import ChooseSavAccListLoans from "./ChooseSavAccListLoans";
import KnowSaveAcc from "./KnowSaveAcc";
import SocialLink from "@/app/components/SocialLink";
import data from "./data.json";
import AboutLoanNumList from "./AboutLoanNumList";
import NumListGetLoan from "./NumListGetLoan";
import BulletListGetLoan from "./BulletListGetLoan";

const TableContentLoans = () => {
  // what to know about saving accounts
  const [linkClickedLoans, setLinkClickedLoans] = useState(false);
  // how to choose a saving account
  const [linkChooseSaveAccLoans, setlinkChooseSaveAccLoans] = useState(false);
  // best saving accounts and rates
  const [linkBestSaveAccLoans, setlinkBestSaveAccLoans] = useState(false);

  const tableContent = "text-gray-500 font-semibold text-base";
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById("knowsaveaccloans");
      const section1 = document.getElementById("choosesaveaccloans");
      const section2 = document.getElementById("aveacc");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setLinkClickedLoans(true);
      }
      if (section1) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkChooseSaveAccLoans(true);
      }
      if (section2) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkBestSaveAccLoans(true);
      }
    };

    const handleLinkClick = () => {
      scrollToSection();
    };

    const link = document.querySelector("Link");
    if (link) {
      link.addEventListener("click", handleLinkClick);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleLinkClick);
      }
    };
  }, []);
  return (
    <div>
      {/* table of content and best savings... */}
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row py-16 md:gap-[60px]">
        <div className="hidden sm:hidden md:block md:flex-col md:gap-8 max-w-[308px]">
          <hr className="border-b-1 border-gray-100 md:mb-8" />
          <div className="flex flex-col gap-4 min-w-[264px]">
            <h1 className="text-red-600 font-semibold text-base">
              Table of contents
            </h1>
            <div className="flex flex-col gap-3">
              <Link
                href="/comparisons/compareLoans#savingaccloans"
                className={`${tableContent}`}
                onClick={() => setlinkBestSaveAccLoans(true)}
              >
                Best loan accounts and rates
              </Link>
              <Link
                href="/comparisons/compareLoans#choosesaveaccloans"
                className={`${tableContent}`}
                onClick={() => setlinkChooseSaveAccLoans(true)}
              >
                How to choose a loan
              </Link>
              <Link
                href="/comparisons/compareLoans#knowsaveaccloans"
                onClick={() => setLinkClickedLoans(true)}
                className={`${tableContent}`}
              >
                What to know about loans
              </Link>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 md:my-8" />
          {/* social link component */}
          <SocialLink />
        </div>

        <div>
          {/* best saving accounts info */}
          <div
            id="savingaccloans"
            className={`${linkBestSaveAccLoans ? "translate-y-20" : ""}`}
          >
            <h1 className="text-gray-900 font-semibold text-3xl">
              Best Loan and rates in June 2023
            </h1>
            <p className="mt-5 mb-12 text-[#667085] text-lg">
              The best loan and rates will vary depending on individual
              circumstances, including credit score, loan amount, loan purpose,
              and the financial institution you choose.
            </p>

            <BankInfoLoans />

            {/* more text below bank info */}
            {/* use style "bodyText" in body */}

            <p className="bodyText mt-6">{data.textBelowOverview}</p>
            {/* software tools */}
            {/* <div className="mt-12">
              <h1 className="titleText">Software and tools</h1>
              <p className="bodyText mt-4 ">{data.softwareTools}</p>
            </div> */}
            {/* resources */}
            {/* <div>
              <h1 className="titleText mt-12">Other resources</h1>
              <p className="bodyText mt-12">{data.otherResources.resource1}</p>
              <p className="bodyText mt-6"> {data.otherResources.resource2}</p>
            </div> */}
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* how to choose a savings account className={styles.marginTop}*/}
          <div
            id="choosesaveaccloans"
            className={`${linkChooseSaveAccLoans ? "translate-y-20" : ""}`}
          >
            <h1 className="text-[#101828] font-semibold text-3xl">
              How to choose a loan
            </h1>
            <p className="bodyText mt-6">{data.loan.loanIntro}</p>
            <ChooseSavAccListLoans />
            <p className="bodyText mt-5">{data.loan.loanEnd}</p>
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* what to know about savings accounts */}
          <div
            id="knowsaveaccloans"
            className={`${linkClickedLoans ? "translate-y-20" : ""}`}
          >
            <div>
              <h1 className="text-[#101828] font-semibold text-3xl">
                What to know about loans
              </h1>
              <h2 className="titleText mt-6">
                What is a loan and how does it work?
              </h2>
              <div className="bodyText mt-4">
                <p>{data.aboutLoan.aboutLoanHead}</p>
                <p className="mt-5">{data.aboutLoan.aboutLoanTitle}</p>
                <AboutLoanNumList />
                <p className="mt-5">{data.aboutLoan.aboutLoanEnd}</p>
              </div>

              <h2 className="titleText mt-6">
                Who should get a savings account?
              </h2>
              <div className="bodyText mt-6">
                <p className="">{data.getLoan.getLoanHead}</p>
                <NumListGetLoan />
                <p className="mt-5">{data.getLoan.secondHead}</p>
                <BulletListGetLoan />
                <p className="mt-5">{data.getLoan.endGetLoan}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContentLoans;
