"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import BankInfo from "./BankInfo";
import ChooseSavAccList from "./ChooseSavAccList";
import KnowSaveAcc from "./KnowSaveAcc";
import SocialLink from "@/app/components/SocialLink";
// import data from "./data.json";
import datasavingacc from "./datasavingacc.json";
import ResourceList from "./ResourceList";

const TableOfContent = () => {
  // what to know about saving accounts
  const [linkClicked, setLinkClicked] = useState(false);
  // how to choose a saving account
  const [linkChooseSaveAcc, setlinkChooseSaveAcc] = useState(false);
  // best saving accounts and rates
  const [linkBestSaveAcc, setlinkBestSaveAcc] = useState(false);

  const tableContent = "text-gray-500 font-semibold text-base";
  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById("knowsaveacc");
      const section1 = document.getElementById("choosesaveacc");
      const section2 = document.getElementById("aveacc");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setLinkClicked(true);
      }
      if (section1) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkChooseSaveAcc(true);
      }
      if (section2) {
        section.scrollIntoView({ behavior: "smooth" });
        setlinkBestSaveAcc(true);
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
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row py-16 md:gap-[60px] ">
        <div className="hidden sm:hidden md:block md:flex-col md:gap-8 max-w-[308px]">
          <hr className="border-b-1 border-gray-100 md:mb-8" />
          <div className="flex flex-col gap-4 min-w-[264px]">
            <h1 className="text-red-600 font-semibold text-base">
              Table of contents
            </h1>
            <div className="flex flex-col gap-3">
              <Link
                href="/comparisons/compareSavingAcc#savingacc"
                className={`${tableContent}`}
                onClick={() => setlinkBestSaveAcc(true)}
              >
                Best savings accounts and rates
              </Link>
              <Link
                href="/comparisons/compareSavingAcc#choosesaveacc"
                className={`${tableContent}`}
                onClick={() => setlinkChooseSaveAcc(true)}
              >
                How to choose a savings account
              </Link>
              <Link
                href="/comparisons/compareSavingAcc#knowsaveacc"
                onClick={() => setLinkClicked(true)}
                className={`${tableContent}`}
              >
                What to know about savings accounts
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
            id="savingacc"
            className={`${linkBestSaveAcc ? "translate-y-20" : ""}`}
          >
            <h1 className="text-gray-900 font-semibold text-3xl">
              Best savings accounts and rates in June 2023
            </h1>
            <p className="mt-6 text-[#667085] text-lg mb-12">
              As we approach the midpoint of 2023, it's the perfect time to
              explore the best savings accounts and rates available in the
              financial market. Whether you're looking to grow your emergency
              fund, save for a major purchase, or plan for the future, finding
              the right savings account can make a significant difference. In
              this guide, we've carefully curated a selection of top savings
              accounts and their competitive rates, helping you make informed
              decisions to optimize your savings strategy.
            </p>

            {/* chipmong bank */}
            <div className="flex flex-col gap-6">
              <BankInfo />
            </div>
            {/* more text below bank info */}
            {/* use style "bodyText" in body */}
            <p className="bodyText mt-6">{datasavingacc.belowTextOverview}</p>
            <div>
              <h1 className="titleText mt-12">Other resources</h1>
              <p className="bodyText mt-12">{datasavingacc.otherResources.resource1}</p>
              <ResourceList />
              <p className="bodyText mt-6"> {datasavingacc.otherResources.resource2}</p>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* how to choose a savings account className={styles.marginTop}*/}
          <div
            id="choosesaveacc"
            className={`${linkChooseSaveAcc ? "translate-y-20" : ""}`}
          >
            <h1 className="text-[#101828] font-semibold text-3xl">
              How to choose a savings account
            </h1>
            <p className="bodyText mt-6">{datasavingacc.savingAcc.saveA1}</p>
            <p className="bodyText mt-5">{datasavingacc.savingAcc.saveA2}</p>
            <ChooseSavAccList />
          </div>
          <hr className="border-b-1 border-gray-100 my-12" />
          {/* what to know about savings accounts */}
          <div
            id="knowsaveacc"
            className={`${linkClicked ? "translate-y-20" : ""}`}
          >
            <KnowSaveAcc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContent;
