"use client";

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { detailAtom } from "../datailAtom";
import { FiCopy } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";


const PromoDetails = ({ params }) => {
  const [detailData, setDetailData] = useRecoilState(detailAtom);
  const postId = params.id;
  const detailId = parseInt(postId);

  useEffect(() => {
    try {
      const fetchData = async () => {
        console.log(detailId, "this is my detail id");
        const result = await fetch(
          `http://34.126.97.182:8080/promotion/{id}?id=${detailId}`
        );

        const data = await result.json();
        console.log(data, "this is my data");
        setDetailData(data.data.promotion);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [detailId]);

  return (
    <div className="">
      <p className="text-red-500 mt-10">Detail ID: {detailId}</p>
      <div className="w-full h-auto pt-20 mb-20">
        <div className="flex flex-col py-10 mx-5 md:mx-10 lg:mx-20">
          <div className="w-full h-auto flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="smallBack">Financial articles</div>
              <p className="text-[12px] text-gray-600">12 min</p>
            </div>
            <h1 className="text-[40px] font-bold">{detailData.title}</h1>

            <div className="flex lg:flex-row md:flex-row sm:flex-col sm:gap-5 mt-5 items-center justify-between">
              <div className="flex flex-row gap-20">
                <div className="flex flex-col">
                  <p className="bankName">Written by</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {"Pich Sokha"}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="bankName">Published on</p>
                  <p className="text-gray-900 text-[18px] font-semibold">
                    {detailData.download_date}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row gap-1 items-center border-2 border-gray-300 w-[120px] h-[40px] rounded-lg justify-center">
                  <FiCopy />
                  <p>Copy link</p>
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsFacebook
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsTwitter
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
                <div className="flex border-2 border-gray-300 w-[40px] h-[40px] rounded-lg">
                  <BsInstagram
                    size={20}
                    color="gray"
                    className="mx-auto my-auto"
                  />
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col sm:gap-5 mt-10">
              <div className="flex lg:w-2/3 md:w-2/3 sm:w-full flex-col pr-20 sm:pr-0 gap-2">
                <h1 className="promotionName">Introduction</h1>
                <p className="text-gray-600 -mt-5">{detailData.content}</p>
                <img
                  src={detailData.image}
                  className="w-full h-full mt-5 rounded-lg"
                />
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src="/images/lavy3.png"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="p-name">{"Meng Lavy"}</p>
                    <p className="p-date">{detailData.download_date}</p>
                  </div>
                </div>
              </div>
              <div className="flex lg:w-1/3 md:w-2/5 sm:w-full ml-10 sm:ml-0">
                <div className="flex w-full lg:max-h-[450px] bg-gray-200 border-2 border-gray-300 rounded-lg">
                  <div className="flex flex-col mx-8 my-8">
                    <div className="flex w-[50px] h-[50px] border-2 border-gray-300 rounded-lg bg-white">
                      <RiSendPlaneLine className="mx-auto my-auto w-[25px] h-[25px] text-gray-500" />
                    </div>
                    <div className="flex flex-col w-full">
                      <h1 className="promotionName mt-8">Weekly newsletter</h1>
                      <p className="post-description">
                        No spam. Just the latest releases and tips, interesting
                        artiles, and exclusive interviews in your inbox every
                        week.
                      </p>
                      <input
                        type="text"
                        className="input-btn mt-8"
                        placeholder="Enter your email"
                      />
                      <p className="text-[15px] text-gray-500 mt-4">
                        Read about our privacy policy
                      </p>
                      <div className="flex redButton items-center justify-center mt-4">
                        Subscibe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <PromotionOffer /> */}
        </div>
      </div>
    </div>
  );
};

export default PromoDetails;
