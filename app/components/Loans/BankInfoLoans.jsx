// "use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageDisplay from "@/app/components/ImageDisplay";

const bankData = [
  {
    bankLogo: "/images/chipmong-bank.png",
    bankName: "Chip Mong Bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    companyOverview:
      "Founded in 2019, Chip Mong Commercial Bank Plc. offers an array of well-designed financial solutions with strong commitments to help customers grow financially. Chip Mong Bank provides a personalized banking experience with a comprehensive understanding of your industry, market, and business’ needs.",
    overviewList: {
      text1: "Offering one-stop service & customized solutions",
      text2: "Delivering fast and excellent services & systems",
      text3: "Partnering for mutually profitable and sustainable businesses",
      text4: "Expanding the business into the largest eco-system",
      text5: "Embracing employees’ growth and development",
      text6:
        "Adhering to long - term, compliant, and sound risk management practices",
    },
    moreAboutOverview:
      "As part of Chip Mong’s successful footprint since 1982 , at Chip Mong Bank we aim to be the most trusted bank in the country with innovative solutions through technology advancement, fast service, and close to our retail and business customers.",
  },
  {
    bankLogo: "/aba-bank.png",
    bankName: "ABA Bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    companyOverview:
      "Established in 1996 as the Advanced Bank of Asia Limited, we have become Cambodia's largest commercial bank by assets, deposits, loans, and profitability, according to the Annual Supervision Report 2021 of the National Bank of Cambodia.",
    overviewList: {
      text1:
        "Personal Banking: ABA Bank provides various personal banking services, including savings accounts, checking accounts, and fixed deposits, tailored to meet individual financial needs.",
      text2:
        "Digital Banking: ABA Bank offers a user-friendly and secure digital banking platform, allowing customers to manage their accounts, conduct transactions, and access financial services online.",
      text3:
        "Mobile Banking: ABA Mobile, the bank's mobile banking app, enables customers to perform banking tasks on their smartphones, such as transferring funds, paying bills, and checking account balances.",
      text4:
        "Business Banking: ABA Bank supports businesses with a suite of banking solutions, including business accounts, business loans, and payment processing services.",
      text5:
        "Debit and Credit Cards: The bank provides debit and credit card options to enhance the convenience of transactions and access to funds.",
      text6:
        "International Services: ABA Bank facilitates international money transfers and foreign currency exchange, making it easier for customers to conduct cross-border transactions.",
    },
    moreAboutOverview:
      "With 27 years in the banking industry, ABA has significantly strengthened its position in the market to offer a comprehensive range of services to customer segments, including SMEs, micro-businesses, and individuals. Our wide-reaching footprint covers 85 branches, 1,300+ self-banking machines, and advanced online and mobile banking platforms, providing our customers with the convenience of modern financial services wherever they are.",
  },
  {
    bankLogo: "/acleda-bank.png",
    bankName: "Acleda Bank",
    location: "Phnom Penh, Cambodia",
    rate: 5.0,
    companyOverview:
      "The National Bank of Cambodia allows ACLEDA Bank Plc. to carry out banking operations at N° 61, Preah Monivong Blvd., Sangkat Srah Chork, Khan Daun Penh, Phnom Penh. ACLEDA Bank Plc. shall abide by the Law on Banking and Financial Institutions and all rules, regulations, circulars, and conditions issued by the National Bank of Cambodia.",
    overviewList: {
      text1:
        "Extensive Branch Network: Acleda Bank boasts an extensive branch network across Cambodia, making it easily accessible to customers in both urban and rural areas.",
      text2:
        "Digital Banking Services: Acleda Bank offers a range of digital banking services, including online banking, mobile banking, and electronic payment options, providing customers with convenient and secure ways to manage their accounts and conduct transactions.",
      text3:
        "ATM Network: Acleda Bank has a widespread network of ATMs throughout Cambodia, allowing customers to access cash and perform various banking functions 24/7.",
      text4:
        "Credit and Debit Cards: The bank provides credit and debit card facilities, enabling customers to make cashless transactions at local and international merchants.",
      text5:
        "Loans and Financing Solutions: Acleda Bank offers various loan and financing solutions to cater to the financial needs of individuals and businesses, including personal loans, home loans, and business loans.",
      text6:
        "Financial Inclusion Initiatives: Acleda Bank actively participates in financial inclusion initiatives to reach underserved communities and provide them with access to banking services, contributing to Cambodia's economic development.",
    },
    moreAboutOverview:
      "ACLEDA Bank is committed to achieving strong, sustainable financial returns, while respecting the environment and community within which we live. We subscribe to the concept of triple bottom line ('people, planet, profit') reporting and are constantly developing indicators for measuring and reporting on our performance and impacts on the society and the environment and to implement a reporting structure based on the guidelines of the Global Reporting Initiative (GRI).",
  },
];

const listIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FE343B" />
    <path
      d="M11.3334 5.5L6.75008 10.0833L4.66675 8"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#FE343B" />
  </svg>
);

// const overviewTexts = Object.values(bankData[0].overviewList);

const BankInfoLoans = () => {
  // chipmong bank
  const [seeMore, setSeeMore] = useState(false);
  // aba bank

  // acleda bank

  return (
    <div className="flex flex-col gap-8 w-full ">
      {bankData.map((bank, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row md:gap-8 border-1 border-gray-200 rounded-lg shadow-md p-8"
        >
          {/* <div className="w-1/4"> */}
          <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center md:items-start">
            <Image
              src={bank.bankLogo}
              alt={bank.bankName}
              width={184}
              height={48}
              className="max-w-[184px] h-auto"
            />
          </div>
          <div className="w-full ">
            <div className="flex justify-center items-center sm:flex sm:justify-center sm:items-center md:flex md:flex-row md:justify-between md:items-start">
              <div className="flex flex-col gap-[4px]">
                <h1 className="companyName">{bank.bankName}</h1>
                <p className="text-[#667085] text-sm">{bank.location}</p>
                <div className="flex flex-row items-center gap-[11px]">
                  <p className="text-[#344054] text-base font-medium">
                    {bank.rate}
                  </p>
                  <ImageDisplay count={bank.rate} />
                </div>
              </div>
              <div className="hidden sm:hidden md:block">
                <button className="redButton ">Product details</button>
              </div>
            </div>
            {/* company overview */}
            <div className="flex flex-col gap-4 text-center sm:text-center md:text-left">
              <h1 className="companyName mt-8">Company Overview</h1>
              <p className="text-[#667085] text-base ">
                {bank.companyOverview}
              </p>
            </div>
            {/* see more button */}
            <div className="block sm:block md:hidden text-center mt-6 mb-8">
              <button
                className="text-[#475467] text-base font-semibold hover:bg-[#F9FAFB] hover:rounded-lg hover:px-[28px]"
                onClick={() => setSeeMore(!seeMore)}
              >
                See more
              </button>
            </div>
            {/* more info on overview */}
            {/* use Object */}
            {/* <div className=" md:flex-col mt-8 gap-3 hidden sm:hidden md:block ">
              {Object.values(bank.overviewList).map((text, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <div className="min-w-[15px] h-auto">{listIcon}</div>
                  <p className="text-[#667085] text-base">{text}</p>
                </div>
              ))}
            </div> */}
            <p className="text-[#667085] text-base mt-8 hidden sm:hidden md:block">
              {bank.moreAboutOverview}
            </p>
            {/* list with bullet and See more button*/}
            {seeMore ? (
              <div className="mb-8">
                {" "}
                {/* use Object */}
                {/* <div className=" flex flex-col mt-8 gap-[16px] ">
                  {Object.values(bank.overviewList).map((text, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-start gap-3 "
                    >
                      <div className="min-w-[15px] h-auto">{listIcon}</div>
                      <p className="text-[#667085] text-base text-start ">
                        {text}
                      </p>
                    </div>
                  ))}
                </div> */}
                <p className="text-[#667085] text-base mt-8 text-center ">
                  {bank.moreAboutOverview}
                </p>
              </div>
            ) : null}

            <div className="block sm:block md:hidden text-center sm:text-center">
              <button className="bg-red-500 text-white inline-block px-[90px] py-3 hover:bg-red-600 rounded-lg">
                Product details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoLoans;
