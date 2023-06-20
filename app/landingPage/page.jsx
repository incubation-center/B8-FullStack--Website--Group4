"use client";
import React, { useState } from "react";
import Image from "next/image";

const promoData = [
  {
    img: "/images/seagame-banner.png",
    bankName: "ABA Bank",
    promoName: "Cambodia Sea Games",
    promoContent:
      "សូមអបអរសាទរអ្នកឈ្នះទាំង 50 រូប! លោកអ្នកបានឈ្នះសំបុត្រចូលរួមពិធីបើកព្រឹត្តិការណ៍ស៊ីហ្គេម និងអាស៊ានប៉ារ៉ាហ្គេម ឆ្នាំ2023 ចំនួន 2 សន្លឹក។",
  },
  {
    img: "/images/foodorder-banner.png",
    bankName: "Vattanac Bank",
    promoName: "Food Order Up to 5$",
    promoContent:
      "កាន់តែងាយស្រួល និងរហ័សជាមួយ KHQR របស់ធនាគារ វឌ្ឍនៈ!អតិថិជនអាចផ្ញើ ឬទទួលប្រាក់ពីធនាគារដែលជាសមាជិកបាគងនៅទូទាំងប្រទេសកម្ពុជា។",
  },
  {
    img: "/images/savingAcc-banner.png",
    bankName: "Wing Bank",
    promoName: "Open Saving Account",
    promoContent:
      "ប្រូម៉ូសិននៅតែបន្ត ហើយអ្នកឈ្នះបន្ទាប់អាចជារូបអ្នក ដូច្នេះសូមបន្តរក្សាសមតុល្យទឹកប្រាក់ក្នុងគណនី វីងរបស់អ្នកចាប់ពី 100 ដុល្លារឡើងទៅ ដើម្បីមានឱកាសក្លាយជាអ្នកឈ្នះនាខែបន្ទាប់។",
  },
];

const LandingPage = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);

  return (
    <div className="landing-page">
      <section className="sect1 py-24  px-4 sm:px-4 md:px-28 ">
        <div className="sect1-div1 flex flex-col justify-center items-center">
          <button className="flex justify-center items-center bg-red-50 font-medium text-sm gap-3 py-1.5 pl-1 pr-2.5 rounded-2xl ">
            <p className="text-white bg-red-500 px-2.5 py-0.5 rounded-2xl shrink-0">
              New feature
            </p>
            <div className="flex flex-row gap-1 shrink-0">
              <p className="text-red-700">Let’s try our ChatGPT Integration</p>
              <Image
                src="/images/arrow-right.png"
                alt="arrow-right icon"
                width={15}
                height={15}
                className="
                w-auto h-auto"
              />
            </div>
          </button>
          <p className="max-w-5xl text-center text-gray-900 font-semibold text-4xl mt-4 sm:mt-4 sm:font-semibold md:font-bold  md:mt-5">
            Unlock Your Financial Potential with ProAdvisor's Innovative
            Solutions
          </p>
          <p className="max-w-3xl text-center  text-gray-500 mt-6 sm:text-gray-500 sm:text-lg md:text-gray-600  font-normal md:text-xl ">
            Our platform provides a comprehensive suite of cutting-edge tools
            and expert guidance to empower you in making informed financial
            decisions.
          </p>
          <div className="btn flex flex-col-reverse gap-y-3 sm:flex-col-reverse md:flex-row justify-center items-center font-semibold text-base sm:text-base md:text-lg mt-8 sm:mt-8 md:mt-12 md:gap-x-3.5">
            <button className="learn-more-btn text-gray-700 rounded-lg px-[182px] sm:px-[182px] py-3 sm:py-3 md:px-5 md:py-3 border-gray-300 border-2 hover:bg-gray-50">
              Learn more
            </button>
            <button className="get-started-btn text-white bg-red-500 rounded-lg px-[182px] sm:px-[182px] py-3 sm:py-3 md:px-5 md:py-3 hover:bg-red-600">
              Get started
            </button>
          </div>
          <Image
            src="/images/laptop-frame.png"
            alt="laptop-frame"
            width={796}
            height={464}
            className="pt-16 max-w-full h-auto"
          />
        </div>
        <hr className="border-b-1 border-gray-100" />
        <div className="list-banks flex flex-col justify-center items-center mt-24">
          <p className="font-normal text-gray-600 text-center">
            The trusted provider over 150+ companies from Cambodia, of accuracy
            rates and financial information
          </p>
          <div className="bank flex flex-col gap-y-8 sm:gap-y-8 sm:flex-col md:flex-row justify-center items-center pt-8 gap-x-12">
            <Image
              src="/images/vattanac-bank.png"
              alt="vattanac-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/acleda-bank.png"
              alt="acleda-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/cambodia-public-bank.png"
              alt="cambodia-public-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/chipmong-bank.png"
              alt="chipmong-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <Image
              src="/images/sathapana-bank.png"
              alt="sathapana-bank logo"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </section>
      <hr className="border-b-1 border-gray-100 mx-4 sm:mx-4 md:mx-28" />
      <section className="sect2 py-24 px-4 sm:px-4 md:px-28 ">
        <div className="container-1">
          <div className=" flex flex-col justify-center items-center">
            <p className="text-red-600 text-sm font-medium text-center">
              Features
            </p>
            <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl text-center pt-4">
              Cutting-edge features for comparisons
            </p>
            <p className="max-w-3xl text-gray-500 font-normal text-center pt-4 sm:pt-4 md:pt-5 text-lg sm:text-lg md:text-xl">
              We provide comprehensive and up-to-date information, empowering
              you to make informed decisions based on your unique needs and
              preferences.
            </p>
          </div>
          {/* desktop images */}
          <div className="mockup relative px-8 mt-12 sm:mt-12 md:mt-16 w-fit mx-auto hidden md:block">
            <Image
              src="/images/screen-mockup.png"
              alt="screen-mockup"
              width={768}
              height={512}
              className="z-0 m-auto w-auto h-auto hidden sm:hidden md:block "
            />
            <div className="z-10 absolute -bottom-16 -left-16 w-[244px] h-full">
              <Image
                src="/images/iphone-mockup.png"
                alt="iphone-mockup"
                // width={244}
                // height={497.34}
                fill
                className="object-scale-down w-auto h-auto"
              />
            </div>
          </div>

          {/* mobile image */}
          <div className="mx-auto relative mt-[48px] w-full max-w-[300px] h-[360px] md:hidden oveflow-clip ">
            <Image
              src="/images/iphone-mockup.png"
              alt="iphone-mockup"
              // width={244}
              // height={497.34}
              fill
              className="object-cover object-top w-auto h-auto"
            />
          </div>
          <div className="mt-[48px] md:mt-24 mx-8 flex flex-col gap-y-10 sm:gap-y-10 sm:flex-col md:flex-row justify-center items-center md:gap-x-8">
            <div className="div1 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/coin-swap.png"
                  alt="Primary-Icons-coins-swap-02"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Loans
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Compare different loan options to make an informed decision.
                </p>
              </div>
              <button className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </button>
            </div>
            <div className=" div2 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/target.png"
                  alt="target icon"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Saving Accounts
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Explore a wide range of savings accounts & find the best
                  option for you.
                </p>
              </div>
              <button className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </button>
            </div>
            <div className="div3 flex flex-col justify-center items-center gap-y-5 ">
              <div className="bg-red-100 rounded-4xl w-12 h-12  border-8 border-primary-25 flex justify-center items-center">
                <Image
                  src="/images/dollar.png"
                  alt="dollar icon"
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
              </div>

              <div className="text-center">
                <p className=" text-gray-900 font-medium text-xl">
                  Compare Fixed Deposit Accounts
                </p>
                <p className="mt-2 text-gray-500 text-base font-normal">
                  Maximize your savings with fixed deposit account comparison.
                </p>
              </div>
              <button className="flex flex-row gap-x-2">
                <p className="text-red-600 font-semibold text-base">
                  Learn more
                </p>
                <Image
                  src="/images/red-arrow-right.png"
                  alt="red-arrow-right"
                  width={20}
                  height={20}
                  className="w-auto h-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-b-1 border-gray-100 mx-4 sm:mx-4 md:mx-28" />
      <section className="sect3 pt-16 sm:pt-16 pb-[85px] sm:pb-[85px] md:pb-24 px-4 sm:px-4 md:px-28 ">
        <div className="container1 flex flex-col justify-center items-center text-center mb-12 sm:mb-12 md:py-16">
          <p className="font-medium sm:font-medium text-sm sm:text-sm text-red-600 md:text-base md:font-semibold mb-4 sm:mb-4 md:mb-3">
            Location
          </p>
          <p className="font-semibold text-3xl sm:text-3xl md:text-4xl text-gray-900 mb-4 sm:mb-4 md:mb-5">
            Compare your finance over Cambodia
          </p>
          <p className="max-w-3xl text-lg font-normal text-gray-500 sm:text-gray-500 md:text-gray-600">
            Our platform offers a powerful financial comparison tool that allows
            you to easily compare various financial products and services
            offered by different banks in Cambodia.
          </p>
        </div>
        <Image
          src="/images/map-dot.png"
          alt="map dot"
          width={1205}
          height={591}
          className="w-auto h-auto hidden sm:hidden md:block"
        />
        <Image
          src="/images/map-phone.png"
          alt="map phone"
          width={1205}
          height={591}
          className="w-auto h-auto block sm:block md:hidden"
        />
      </section>
      <section className="sect4 bg-gray-50 flex flex-col justify-center items-center py-16 sm:py-16 md:py-24 gap-y-8">
        <Image
          src="/images/sathapana-bank.png"
          alt="sathapana-bank logo"
          width={181}
          height={48}
          className="w-auto h-auto"
        />
        <p className="max-w-[1216px] text-gray-900 font-medium text-3xl sm:text-3xl md:text-5xl text-center">
          Their powerful tools and expert insights have revolutionized the way I
          approach my finances.
        </p>
        <div className="flex flex-col justify-center items-center flex-grow-0">
          <Image
            src="/images/Avatar.png"
            alt="avatar"
            width={64}
            height={64}
            className="w-auto h-auto "
          />
          <p className="text-gray-900 text-lg font-medium mt-4">
            Soun Chansreyda
          </p>
          <p className="text-gray-600 font-normal text-base mt-1">
            Project Manager, Sathapana Bank
          </p>
        </div>
      </section>
      <section className="sect5 flex flex-col justify-center items-center py-16 sm:py-16 md:py-24 gap-y-12 sm:gap-y-12 md:gap-y-16 px-4 sm:px-4 md:px-28">
        <div className="sect5-div1 text-center">
          <p className="mb-4 sm:mb-4 md:mb-5 text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl">
            Frequently asked questions
          </p>
          <p className="text-gray-500 text-lg sm:text-lg md:text-xl font-normal">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="sect5-div2 flex flex-col gap-y-8">
          <div className="question1">
            <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
              <p className="text-gray-900 font-medium text-lg ">
                How can ProAdvisor help me with my financial decisions?
              </p>
              <Image
                src={
                  showAnswer1
                    ? "/images/icon-unwrap.png"
                    : "/images/icon-wrap.png"
                }
                alt="icon-unwrap"
                width={24}
                height={24}
                className="w-auto h-auto ml-4 cursor-pointer"
                onClick={() => setShowAnswer1(!showAnswer1)}
              />
            </div>

            <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto ">
                {showAnswer1 ? (
                  <p className="text-gray-500 text-base font-normal w-auto ">
                    ProAdvisor offers a range of services to support your
                    financial decisions. It provides loan comparison tools to
                    help you find the best loan options, savings management
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100" />
          <div className="question2">
            <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
              <p className="text-gray-900 font-medium text-lg ">
                Is ProAdvisor only available in Cambodia?
              </p>
              <Image
                src={
                  showAnswer2
                    ? "/images/icon-unwrap.png"
                    : "/images/icon-wrap.png"
                }
                alt="icon-unwrap"
                width={24}
                height={24}
                className="w-auto h-auto ml-4 cursor-pointer"
                onClick={() => setShowAnswer2(!showAnswer2)}
              />
            </div>

            <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto ">
                {showAnswer2 ? (
                  <p className="text-gray-500 text-base font-normal w-auto ">
                    ProAdvisor offers a range of services to support your
                    financial decisions. It provides loan comparison tools to
                    help you find the best loan options, savings management
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100" />
          <div className="question3">
            <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
              <p className="text-gray-900 font-medium text-lg ">
                How secure is ProAdvisor?
              </p>
              <Image
                src={
                  showAnswer3
                    ? "/images/icon-unwrap.png"
                    : "/images/icon-wrap.png"
                }
                alt="icon-unwrap"
                width={24}
                height={24}
                className="w-auto h-auto ml-4 cursor-pointer"
                onClick={() => setShowAnswer3(!showAnswer3)}
              />
            </div>

            <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
                {showAnswer3 ? (
                  <p className="text-gray-500 text-base font-normal w-auto ">
                    ProAdvisor offers a range of services to support your
                    financial decisions. It provides loan comparison tools to
                    help you find the best loan options, savings management
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100" />
          <div className="question4">
            <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
              <p className="text-gray-900 font-medium text-lg ">
                Can I trust the financial advice provided by ProAdvisor?
              </p>
              <Image
                src={
                  showAnswer4
                    ? "/images/icon-unwrap.png"
                    : "/images/icon-wrap.png"
                }
                alt="icon-unwrap"
                width={24}
                height={24}
                className="w-auto h-auto ml-4 cursor-pointer"
                onClick={() => setShowAnswer4(!showAnswer4)}
              />
            </div>

            <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
                {showAnswer4 ? (
                  <p className="text-gray-500 text-base font-normal w-auto ">
                    ProAdvisor offers a range of services to support your
                    financial decisions. It provides loan comparison tools to
                    help you find the best loan options, savings management
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <hr className="border-b-1 border-gray-100" />
          <div className="question5">
            <div className="flex flex-start items-start sm:flex-start sm:items-start justify-between md:items-center mb-2 gap-x-2 sm:gap-x-2 md:gap-x-56">
              <p className="text-gray-900 font-medium text-lg ">
                How do I get started with ProAdvisor?
              </p>
              <Image
                src={
                  showAnswer5
                    ? "/images/icon-unwrap.png"
                    : "/images/icon-wrap.png"
                }
                alt="icon-unwrap"
                width={24}
                height={24}
                className="w-auto h-auto ml-4 cursor-pointer"
                onClick={() => setShowAnswer5(!showAnswer5)}
              />
            </div>

            <div className="flex justify-start items-start max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
              <div className="max-w-[400px] sm:max-w-[400px] md:max-w-[720px] h-auto">
                {showAnswer5 ? (
                  <p className="text-gray-500 text-base font-normal w-auto ">
                    ProAdvisor offers a range of services to support your
                    financial decisions. It provides loan comparison tools to
                    help you find the best loan options, savings management
                    features to help you save and grow your money, personalized
                    financial advice based on your unique needs, and access to
                    educational resources to enhance your financial knowledge.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="sect6-div3 px-5 sm:px-5 md:px-80 py-8 flex flex-col justify-center items-center gap-y-6 sm:gap-y-6 md:gap-y-8 bg-gray-50 rounded-2xl">
          <Image
            src="/images/avatar-group.png"
            alt="avatar group"
            width={120}
            height={56}
            className="w-auto h-auto"
          />
          <div className="text-center min-w-[303px]">
            <p className="text-gray-900 font-medium text-xl mb-2">
              Still have questions?
            </p>
            <p className="text-gray-500 text-lg font-normal">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button className="py-2.5 px-4.5 font-semibold text-base text-white bg-red-600 rounded-lg">
            Get in touch
          </button>
        </div>
      </section>
      <section className="sect6 flex flex-col gap-16 py-16 px-4 sm:px-4 md:px-28">
        <div className="sect6-div1 flex flex-col sm:flex-col sm:items-start md:flex  md:flex-row md:justify-between md:items-start pt-2.5 gap-x-[400px]">
          <div className="">
            <p className="text-red-600 text-sm sm:text-sm md:text-base font-semibold mb-2 sm:mb-2 md:mb-3">
              Our Promotions
            </p>
            <p className="text-gray-900 font-semibold text-3xl sm:text-3xl md:text-4xl mb-5">
              Lasted promotions
            </p>
            <p className="text-gray-600 text-lg sm:text-lg md:text-xl font-normal">
              Our platform keeps you updated on the most current and exciting
              promotions from banks and financial institutions in Cambodia.
            </p>
          </div>
          <div className=" flex-col flex-grow-0 flex-shrink-0 items-center hidden sm:hidden md:block">
            <button className="text-white font-semibold text-base py-3 px-5 bg-red-500 rounded-lg hover:bg-red-600">
              View more
            </button>
          </div>
        </div>
        <div className="sect6-div2 flex flex-col sm:flex-col md:flex-row justify-around gap-8 px-8 ">
          {promoData.map((data, index) => (
            <div key={index} className="promo1 flex flex-col basis-full">
              <Image
                src={data.img}
                alt="seagame-banner"
                width={384}
                height={240}
                className="w-auto h-auto mb-6"
              />
              <div className="flex flex-col">
                <p className="bankName">{data.bankName}</p>
                <div className="flex flex-row items-start justify-between">
                  <p className="promotionName">{data.promoName}</p>
                  <button>
                    <Image
                      src="/images/go-icon.png"
                      alt="go icon"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <p className="promotionContent">{data.promoContent}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center sm:block md:hidden">
          <button className="text-white font-semibold text-base py-3 px-[185px] sm:px-[185px] md:px-5 bg-red-500 rounded-lg hover:bg-red-600">
            View more
          </button>
        </div>
      </section>
      <hr className="border-b-1 border-gray-100 mx-4 sm:mx-4 md:mx-28" />
    </div>
  );
};

export default LandingPage;
