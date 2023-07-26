// "use client";
import React, { useState } from "react";
import FeaOfferBank from "./FeaOfferBank";

const currencyRiel = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_373_65074)">
      <rect x="2" y="1.00415" width="44" height="44" rx="8" fill="white" />
      <g clip-path="url(#clip0_373_65074)">
        <path
          d="M24 13.8375C22.187 13.8375 20.4148 14.3751 18.9073 15.3824C17.3999 16.3896 16.225 17.8213 15.5311 19.4963C14.8373 21.1712 14.6558 23.0144 15.0095 24.7925C15.3632 26.5707 16.2363 28.204 17.5182 29.486C18.8002 30.768 20.4336 31.641 22.2117 31.9947C23.9899 32.3484 25.833 32.1669 27.508 31.4731C29.183 30.7793 30.6146 29.6044 31.6218 28.0969C32.6291 26.5895 33.1667 24.8172 33.1667 23.0042C33.1667 20.573 32.2009 18.2415 30.4819 16.5224C28.7628 14.8033 26.4312 13.8375 24 13.8375ZM24 30.8613C22.446 30.8613 20.9269 30.4005 19.6348 29.5372C18.3427 28.6738 17.3357 27.4467 16.741 26.011C16.1463 24.5753 15.9907 22.9955 16.2939 21.4713C16.597 19.9472 17.3454 18.5472 18.4442 17.4484C19.543 16.3495 20.9431 15.6012 22.4672 15.298C23.9913 14.9949 25.5711 15.1504 27.0068 15.7451C28.4425 16.3398 29.6697 17.3469 30.533 18.639C31.3964 19.9311 31.8572 21.4502 31.8572 23.0042C31.8572 25.088 31.0294 27.0865 29.5559 28.56C28.0824 30.0335 26.0839 30.8613 24 30.8613ZM27.1784 22.1645C26.9088 22.6566 26.5836 23.0186 26.2028 23.2503C25.8067 23.4866 25.3697 23.6462 24.9145 23.7206V27.2994C24.9114 27.3846 24.8904 27.4683 24.8528 27.5448C24.8152 27.6213 24.7618 27.6891 24.6963 27.7436C24.5588 27.8576 24.2701 27.8925 24.2701 27.8925H23.6879C23.6879 27.8925 23.2542 27.8341 23.0195 27.6743C22.7682 27.4963 22.5496 27.2761 22.3735 27.0233C22.1709 26.74 22.0069 26.431 21.8857 26.1045C21.7576 25.7706 21.692 25.4161 21.692 25.0585C21.692 24.6893 21.7784 24.4005 21.9512 24.192C22.0301 24.0919 22.1311 24.0113 22.2463 23.9567C22.3615 23.9021 22.4877 23.8749 22.6152 23.8772C22.6733 23.8804 22.7308 23.8894 22.7871 23.9039C22.876 23.9267 22.9576 23.972 23.0239 24.0354C23.1179 24.1274 23.19 24.2393 23.2351 24.3628C23.2969 24.5123 23.3276 24.7189 23.3273 24.9827C23.3273 25.2111 23.2922 25.3824 23.222 25.4966C23.1638 25.5976 23.0861 25.6859 22.9933 25.7564C22.9242 25.8083 22.847 25.8483 22.7647 25.8748C22.6943 25.8955 22.6594 25.9293 22.6594 25.9763C22.6622 26.0657 22.6769 26.1543 22.7031 26.2398C22.7356 26.3519 22.7845 26.4585 22.8482 26.5563C22.9122 26.658 22.9924 26.7487 23.0856 26.8247C23.1706 26.8943 23.2769 26.9328 23.3867 26.9338V23.7648C23.1368 23.7413 22.8777 23.7135 22.6289 23.6808C22.3538 23.6421 22.0838 23.5729 21.8241 23.4745C21.5076 23.4745 21.2613 23.3821 21.0853 23.1973C20.9163 23.0229 20.8218 22.7895 20.8218 22.5467C20.8218 22.3038 20.9163 22.0705 21.0853 21.896C21.1708 21.8083 21.2736 21.7392 21.3871 21.6931C21.5006 21.647 21.6224 21.6248 21.7449 21.6281C21.9601 21.6245 22.1707 21.6907 22.3451 21.8169C22.5123 21.9349 22.6273 22.113 22.666 22.314C22.7594 22.372 22.8599 22.4178 22.965 22.4504C23.0817 22.488 23.2285 22.5426 23.4391 22.6141V22.1568C23.4042 21.8458 23.3431 21.6319 23.2209 21.5146C23.0987 21.3973 22.9273 21.3389 22.7113 21.3389C22.6332 21.3383 22.5552 21.3427 22.4777 21.352C22.418 21.3602 22.3579 21.3646 22.2977 21.3651C22.1749 21.3651 22.0734 21.2833 21.9943 21.119C21.9152 20.9548 21.8022 20.7322 21.656 20.4506L23.8713 18.0722H24.1174L25.5169 19.0429C25.5518 19.0783 25.6222 19.0974 25.7275 19.0974C25.8134 19.0983 25.8972 19.0705 25.9654 19.0183L26.2202 19.3877L25.1912 20.4397C25.1442 20.4397 25.0771 20.4015 24.9893 20.3251C24.9014 20.2487 24.7956 20.1658 24.6728 20.0747C24.5358 19.9759 24.3896 19.8906 24.2363 19.8199C24.0644 19.7396 23.8766 19.6989 23.6868 19.7009C23.6138 19.7016 23.5417 19.7182 23.4757 19.7495C23.4019 19.784 23.3349 19.8317 23.2782 19.8903C23.2192 19.9477 23.1645 20.0093 23.1145 20.0747C23.067 20.1363 23.0146 20.2138 22.9557 20.3077C23.1006 20.2795 23.2478 20.2647 23.3955 20.2635C23.6066 20.2606 23.8166 20.2949 24.0159 20.365C24.1877 20.4256 24.3482 20.5147 24.4906 20.6285C24.6167 20.7304 24.7199 20.8577 24.7934 21.0023C24.8701 21.1385 24.8931 21.2985 24.8578 21.4508V22.7434C25.1845 22.7171 25.5046 22.6367 25.805 22.5055C26.104 22.3767 26.4028 22.1403 26.7015 21.7962L27.1784 22.1645Z"
          fill="#667085"
        />
      </g>
      <rect
        x="2.5"
        y="1.50415"
        width="43"
        height="43"
        rx="7.5"
        stroke="#D0D5DD"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_373_65074"
        x="0"
        y="0.00415039"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_373_65074"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_373_65074"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_373_65074">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(14 13.0042)"
        />
      </clipPath>
    </defs>
  </svg>
);
const currencyDollar = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_412_65992)">
      <rect x="2" y="1.00415" width="44" height="44" rx="8" fill="white" />
      <g clip-path="url(#clip0_412_65992)">
        <path
          d="M21.0833 25.2263C21.0833 26.3002 21.9539 27.1708 23.0278 27.1708H24.8333C25.9839 27.1708 26.9167 26.238 26.9167 25.0874C26.9167 23.9369 25.9839 23.0041 24.8333 23.0041H23.1667C22.0161 23.0041 21.0833 22.0714 21.0833 20.9208C21.0833 19.7702 22.0161 18.8374 23.1667 18.8374H24.9722C26.0461 18.8374 26.9167 19.708 26.9167 20.7819M24 17.5874V18.8374M24 27.1708V28.4208M32.3333 23.0041C32.3333 27.6065 28.6024 31.3374 24 31.3374C19.3976 31.3374 15.6667 27.6065 15.6667 23.0041C15.6667 18.4017 19.3976 14.6708 24 14.6708C28.6024 14.6708 32.3333 18.4017 32.3333 23.0041Z"
          stroke="#667085"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="2.5"
        y="1.50415"
        width="43"
        height="43"
        rx="7.5"
        stroke="#D0D5DD"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_412_65992"
        x="0"
        y="0.00415039"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_412_65992"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_412_65992"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_412_65992">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(14 13.0042)"
        />
      </clipPath>
    </defs>
  </svg>
);

const ShowContent = () => {
  const [currency, setCurrency] = useState(true);

  return (
    <div>
      {/* we found 51 products */}
      <div>
        <h1 className="text-[#101828] font-medium text-xl">
          Good news! We’ve found{" "}
          <span className="text-[#12B76A]">51 products</span> for you to take a
          look at.
        </h1>
        <p className="text-[#475467] text-lg font-normal mt-5">
          Our platform keeps you updated on the most current and exciting
          promotions from banks and financial institutions in Cambodia.
        </p>
      </div>
      {/* feature offers */}
      <div className="mt-8 flex flex-col items-center ">
        {/* feature offers heading and filter */}
        <div className="flex justify-between w-full">
          <p className="text-[#344054] text-xl font-semibold">Feature offers</p>
          <div className="flex gap-3">
            {currency ? (
              <button onClick={() => setCurrency(!currency)}>
                {currencyRiel}
              </button>
            ) : (
              <button onClick={() => setCurrency(!currency)}>
                {currencyDollar}
              </button>
            )}

            <select
              id="interest-rate"
              name="interest-rate"
              className="selectStyle"
            >
              <option value="rateAER">Company Provider</option>
              <option value="rateAER">Interest Rate (AER)</option>
              <option value="yearly">Term</option>
            </select>
          </div>
        </div>
        {/* display bank info */}
        {/* <div className="mt-6"> */}
        <FeaOfferBank />
        <button className="redButton mt-16">View more results</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ShowContent;
