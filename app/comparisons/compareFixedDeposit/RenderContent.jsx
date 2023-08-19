// "use client";
// import React, { useEffect, useState } from "react";
// // import Bank from "./Bank";
// // import FeaOfferBank from "../compareLoans/FeaOfferBank";
// import FeatureOffer from "./FeatureOffer";
// // import { useRecoilState } from "recoil";
// // import { dataAtom, currentItemsAtom } from "@/app/atoms/Data";
// // import { getAllfixedeposits } from "@/app/api/fixeddeposits/getAlldeposits";

// // const currencyRiel = (
// //   <svg
// //     width="48"
// //     height="49"
// //     viewBox="0 0 48 49"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <g filter="url(#filter0_d_373_65074)">
// //       <rect x="2" y="1.00415" width="44" height="44" rx="8" fill="white" />
// //       <g clip-path="url(#clip0_373_65074)">
// //         <path

// //           fill="#667085"
// //         />
// //       </g>
// //       <rect
// //         x="2.5"
// //         y="1.50415"
// //         width="43"
// //         height="43"
// //         rx="7.5"
// //         stroke="#D0D5DD"
// //       />
// //     </g>
// //     <defs>
// //       <filter
// //         id="filter0_d_373_65074"
// //         x="0"
// //         y="0.00415039"
// //         width="48"
// //         height="48"
// //         filterUnits="userSpaceOnUse"
// //         color-interpolation-filters="sRGB"
// //       >
// //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
// //         <feColorMatrix
// //           in="SourceAlpha"
// //           type="matrix"
// //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
// //           result="hardAlpha"
// //         />
// //         <feOffset dy="1" />
// //         <feGaussianBlur stdDeviation="1" />
// //         <feColorMatrix
// //           type="matrix"
// //           values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
// //         />
// //         <feBlend
// //           mode="normal"
// //           in2="BackgroundImageFix"
// //           result="effect1_dropShadow_373_65074"
// //         />
// //         <feBlend
// //           mode="normal"
// //           in="SourceGraphic"
// //           in2="effect1_dropShadow_373_65074"
// //           result="shape"
// //         />
// //       </filter>
// //       <clipPath id="clip0_373_65074">
// //         <rect
// //           width="20"
// //           height="20"
// //           fill="white"
// //           transform="translate(14 13.0042)"
// //         />
// //       </clipPath>
// //     </defs>
// //   </svg>
// // );
// // const currencyDollar = (
// //   <svg
// //     width="48"
// //     height="49"
// //     viewBox="0 0 48 49"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <g filter="url(#filter0_d_412_65992)">
// //       <rect x="2" y="1.00415" width="44" height="44" rx="8" fill="white" />
// //       <g clip-path="url(#clip0_412_65992)">
// //         <path
// //           d="M21.0833 25.2263C21.0833 26.3002 21.9539 27.1708 23.0278 27.1708H24.8333C25.9839 27.1708 26.9167 26.238 26.9167 25.0874C26.9167 23.9369 25.9839 23.0041 24.8333 23.0041H23.1667C22.0161 23.0041 21.0833 22.0714 21.0833 20.9208C21.0833 19.7702 22.0161 18.8374 23.1667 18.8374H24.9722C26.0461 18.8374 26.9167 19.708 26.9167 20.7819M24 17.5874V18.8374M24 27.1708V28.4208M32.3333 23.0041C32.3333 27.6065 28.6024 31.3374 24 31.3374C19.3976 31.3374 15.6667 27.6065 15.6667 23.0041C15.6667 18.4017 19.3976 14.6708 24 14.6708C28.6024 14.6708 32.3333 18.4017 32.3333 23.0041Z"
// //           stroke="#667085"
// //           stroke-width="2"
// //           stroke-linecap="round"
// //           stroke-linejoin="round"
// //         />
// //       </g>
// //       <rect
// //         x="2.5"
// //         y="1.50415"
// //         width="43"
// //         height="43"
// //         rx="7.5"
// //         stroke="#D0D5DD"
// //       />
// //     </g>
// //     <defs>
// //       <filter
// //         id="filter0_d_412_65992"
// //         x="0"
// //         y="0.00415039"
// //         width="48"
// //         height="48"
// //         filterUnits="userSpaceOnUse"
// //         color-interpolation-filters="sRGB"
// //       >
// //         <feFlood flood-opacity="0" result="BackgroundImageFix" />
// //         <feColorMatrix
// //           in="SourceAlpha"
// //           type="matrix"
// //           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
// //           result="hardAlpha"
// //         />
// //         <feOffset dy="1" />
// //         <feGaussianBlur stdDeviation="1" />
// //         <feColorMatrix
// //           type="matrix"
// //           values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
// //         />
// //         <feBlend
// //           mode="normal"
// //           in2="BackgroundImageFix"
// //           result="effect1_dropShadow_412_65992"
// //         />
// //         <feBlend
// //           mode="normal"
// //           in="SourceGraphic"
// //           in2="effect1_dropShadow_412_65992"
// //           result="shape"
// //         />
// //       </filter>
// //       <clipPath id="clip0_412_65992">
// //         <rect
// //           width="20"
// //           height="20"
// //           fill="white"
// //           transform="translate(14 13.0042)"
// //         />
// //       </clipPath>
// //     </defs>
// //   </svg>
// // );

// const RenderContent = () => {
//   //   const [currency, setCurrency] = useState(true);
//   //   const [data, setData] = useRecoilState(dataAtom);
//   //   const [currentItems, setCurrentItems] = useRecoilState(currentItemsAtom);
//   //   const itemsPerPage = 4;
//   //   const [itemOffset, setItemOffset] = useState(0);
//   //   const [selection, setSelection] = useState("");
//   //   const [riel, setRiel] = useState("");
//   //   const [dola, setDola] = useState("");
//   //   const [queryParams, setQueryParams] = useState({
//   //     currency: "",
//   //   });

//   // const handleDola = () => {
//   //   setRiel("khr");
//   //   setQueryParams({
//   //     currency: riel,
//   //   });
//   //   setCurrency(!currency);
//   //   fetchDataWithParams();
//   // };
//   // const handleRiel = () => {
//   //   setDola("usd");
//   //   setQueryParams({
//   //     currency: dola,
//   //   });
//   //   setCurrency(!currency);
//   //   fetchDataWithParams();
//   // };

//   // const fetchDataWithParams = async () => {
//   //   try {
//   //     const res = await getAllfixedeposits(queryParams);
//   //     getAllfixedeposits
//   //     setData(res);
//   //     setCurrentItems(res?.slice(0, itemsPerPage) || []);
//   //     console.log("Result of luy is : ", res);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   setQueryParams({
//   //     currency: dola,
//   //   });
//   //   // setItemOffset(0);
//   // }, [dola, setQueryParams]);
//   // useEffect(() => {
//   //   setQueryParams({
//   //     currency: riel,
//   //   });
//   //   // setItemOffset(0);
//   // }, [riel, setQueryParams]);

//   // useEffect(() => {
//   //   const updatedCurrentItems =
//   //     data?.slice(itemOffset, itemOffset + itemsPerPage) || [];
//   //   setCurrentItems(updatedCurrentItems);
//   // }, [itemOffset, data, setCurrentItems]);
//   return (
//     <div>
//       {/* we found 51 products */}
//       <div>
//         <h1 className="text-[#101828] font-medium text-xl">
//           Good news! We’ve found{" "}
//           <span className="text-[#12B76A]">51 products</span> for you to take a
//           look at.
//         </h1>
//         <p className="text-[#475467] text-lg font-normal mt-5">
//           Our platform keeps you updated on the most current and exciting
//           promotions from banks and financial institutions in Cambodia.
//         </p>
//       </div>
//       {/* feature offers */}
//       <div className="mt-8">
//         {/* feature offers heading and filter */}
//         <div className="flex justify-between">
//           <p className="text-[#344054] text-xl font-semibold">Feature offers</p>
//           <div className="flex gap-3">
//             {/* {currency ? (
//               <button onClick={handleDola}>{currencyRiel}</button>
//             ) : (
//               <button onClick={handleRiel}>{currencyDollar}</button>
//             )} */}
//             {/* <button onClick={fetchDataWithParams}>Testing luy calling</button> */}
//             <select
//               id="interest-rate"
//               name="interest-rate"
//               className="selectStyle"
//             >
//               <option value="rateAER">Interest at Maturity</option>
//               <option value="rateAER">Monthly Interest</option>
//             </select>
//             {/* <select className="selectStyle " onClick={handleSelectValue}>
//               <option>Less than a year</option>
//               <option value="mot">MOT</option>
//               <option value="mat">MAT</option>
              
//             </select> */}
//           </div>
//         </div>
//         {/* display bank info */}
//         <FeatureOffer />
//       </div>
//     </div>
//   );
// };

// export default RenderContent;
