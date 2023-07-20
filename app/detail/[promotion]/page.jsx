// "use client";

// import { use, useState, useEffect } from "react";

// const data = [
//   {
//     id: "wing-bank",
//     date: "2023-06-16 00:00:00",
//     title:
//       "Wing Bank, MBCC, and Khmer Times Join Forces to Raise Funds for a Landmine Free Cambodia",
//     content:
//       "Wing Bank, together with Malaysian Business Chamber Cambodia (MBCC), and Khmer Times are signing an MoU to raise funds to help the Cambodian Mine Action and Victim Assistance Authority (CMAA) and the Royal Government towards their efforts to make Cambodia a landmine free nation by 2025.\nThis event is attended by H.E. Ly Panharith, Secretary General of CMAA, Mr. Han Peng Kwang, CEO of Wing Bank, Oknha Tan Khee Meng, MBCC, and Mohan Bandam, Publisher of Khmer Times and honorably witnessed by H.E. Senior Minister Ly Thuch, the First Vice President of CMAA and H.E. Datuk Eldeen Husaini Mohd Hashim, Ambassador of Malaysia to the Kingdom of Cambodia, and other dignitaries.\n“We know that humanitarian mine action is a precondition, not only for peace and security but also for poverty reduction and development,” said H. E. Ly Thuch. “There is no doubt in my mind that humanitarian mine action has contributed significantly to socio-economic development in Cambodia by making available safe land for local livelihood activities and sustainable economic development while also reducing casualties.”\n \n\n\n\n \n\nTo bring this landmine-free campaign and awareness for this to the people of Cambodia, MBCC and Khmer Times, with the kind cooperation and facilitation of Wing Bank, through their thousands of Wing locations and branches nationwide, are inking an MoU to raise Funds from throughout the country in a simple yet affordable campaign with the Theme of 4,000 KHR to clear 5 square meters of land.\n“I am confident that with the continuous generosity and goodwill from friends near and far, together we can make the vision of a landmine-free Cambodia a reality in the near future, “said Oknha Tan Khee Meng, President of MBCC. “Let us all give our fullest support to this campaign and play our part in making Cambodia a mine-free country by 2025.”\n“We are more than happy to do our part to help Cambodia to eliminate the terrible impact of landmines on people’s lives,” said Han Peng Kwang, CEO of Wing Bank, “Also, we hope that our contribution can help bring about positive changes to the community as people will have more land for farming and other development.”\nCambodia, with a population of approximately 16 million people, needs to have all arable land free from land mines to enable farmers to cultivate and provide food for the nation. Cambodia has the possibility of becoming a food basket for the region with its ample arable land and experienced farmers, comprising more than 75 per cent of the population.\nSince June 2022, MBCC and Khmer Times have raised more than $100,000 and assisted in handing back several villagers in Kong Pisei District back to their people who inhabit the once land mines infested area. This includes food kits for more than 1,000 people.\n“When I was involved with agriculture for close to five years, the land we were developing was littered with land mines and UXOs. It became a personal mission for me and for the past years of Khmer Times, which will be nine years in a week, to do something about this scrounge, help the people and the country to rid it of this menace once and for all,” said Mohan Bandam, Publisher of Khmer Times.\n \n\n\n\n \nWith this 4,000 KHR campaign, all parties, with the kind assistance of Wing Bank, hope that this affordable and meaningful campaign will draw the unflinching support of all Cambodians and make this campaign a huge success.\nAccording to CMAA, Cambodia needs almost $138 million to achieve its target of being mine-free, and this campaign will help, in some ways, to alleviate the burden of the Government in delivering land back to the population.\nFrom 1992 to March 2022, roughly 2,579 square kilometers of explosive hazard-contaminated land has been released for productive use such as agriculture, resettlement, roads, schools and other social infrastructure, leaving approximately 563 square kilometers of land yet to be cleared of land mines.",
//     name: "WING",
//     url: "https://www.wingbank.com.kh/en/wing-bank-mbcc-and-khmer-times-join-forces-to-raise-funds-for-a-landmine-free-cambodia/",
//     image:
//       "https://www.wingbank.com.kh/wp-content/uploads/2023/06/WC102565-1024x683.jpg",
//     website: "WING",
//     download_date: "2023-07-08",
//     image_path:
//       "imagesradar/9537f2da1a313fea17833dc11bfbeb4d829a6cab966f141f33372330ae6459bd.jpg",
//   },
//   {
//     date: "2023-06-12 00:00:00",
//     title: "Enjoy 50% off on movie tickets with Wing Mastercard",
//     content:
//       "Promo Period:\n Jun 12, 2023 to Jul 31, 2023\nWing Bank and Major Cineplex are excited to announce a special promotion for all Wing Mastercard holders! From now until July 31, 2023, you can get 50% off movie tickets when you pay with your Wing Mastercard. To redeem this offer, present your Wing Mastercard at the ticket counters when you purchase your tickets. This offer is valid for all movies, all days of the week. Don’t miss out on this great opportunity to save money on your next movie night!\nApply for a Wing Mastercard today and start enjoying 50% off on movie tickets at Major Cineplex!\n \n ",
//     name: "WING",
//     url: "https://www.wingbank.com.kh/en/enjoy-50-off-on-movie-tickets-with-wing-mastercard/",
//     image:
//       "https://www.wingbank.com.kh/wp-content/uploads/2023/06/Master-Card-x-Wing-EN-Mobile.jpg",
//     website: "WING",
//     download_date: "2023-07-08",
//     image_path:
//       "imagesradar/87bfe597a935aa3ea724c5fe99a198b68441cc89053803467e38d9c19e699fbb.jpg",
//   },
//   {
//     date: "2023-03-15 00:00:00",
//     title:
//       "Signing Ceremony of Memorandum of Understanding on Strategic Partnership between Dragon Land Investment Co., Ltd. and Phillip Trustee (Cambodia) Co., Ltd. , and Phillip Bank Plc",
//     content:
//       "Phnom Penh, 15 March 2023 - Dragon Land Investment Co., Ltd. and Phillip Trustee (Cambodia) Co., Ltd., and Phillip Bank Plc sign a Memorandum of Understanding (MoU) to expand the overall scope of the market for products, services, and cooperation between Borey Dragon Land 598 and Phillip Trustee (Cambodia) Co., Ltd. and Phillip Bank Plc. In particular, attracting international investors to build real estate credibility in the Cambodian market. In addition, this strategic partnership aims to facilitate foreign clients to invest in Dragon Land Project with trustee service provided by Phillip Trustee as well as affordable housing loans provided by Phillip Bank. With this MOU, all local and foreign clients can enjoy up to 80% housing loans with Phillip Bank. In addition, Phillip Trustee could assist foreign buyers for the long-term official trustee service. \n \n ",
//     name: "PHILLIP",
//     url: "https://www.phillipbank.com.kh/en/articles/whats-new-2-whats-new/signing-ceremony-of-memorandum-of-understanding-on-strategic-partnership-between-dragon-land-investment-co-ltd-and-phillip-trustee-cambodia-co-ltd-and-phillip-bank-plc",
//     image:
//       "https://www.phillipbank.com.kh/albums/2023-03-16/YU44oBYf_album_image.jpg",
//     website: "PHILLIP",
//     download_date: "2023-07-10",
//     image_path:
//       "imagesradar/590ee8d4f8a114b4fcc224a02938e577e3e6aeee5b7661489b336b76b0a468c8.jpg",
//   },
// ];

// export default function Page({ params }) {
//   const [detailData, setDetailData] = useState(
//     data.filter((item) => item.id === params.promotion)[0]
//   );

//   useEffect(() => {
//     console.log(detailData);
//   }, [detailData]);

//   if (!detailData) return <div>loading...</div>;

//   return (
//     <div>
//       <h1>promotion {params.promotion}</h1>

//       <img src={detailData.image} alt="" />
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-scroll";

const data = [
  {
    id: 10,
    date: "2023-06-16 00:00:00",
    title:
      "Wing Bank, MBCC, and Khmer Times Join Forces to Raise Funds for a Landmine Free Cambodia",
    content:
      "Wing Bank, together with Malaysian Business Chamber Cambodia (MBCC), and Khmer Times are signing an MoU to raise funds to help the Cambodian Mine Action and Victim Assistance Authority (CMAA) and the Royal Government towards their efforts to make Cambodia a landmine free nation by 2025.\nThis event is attended by H.E. Ly Panharith, Secretary General of CMAA, Mr. Han Peng Kwang, CEO of Wing Bank, Oknha Tan Khee Meng, MBCC, and Mohan Bandam, Publisher of Khmer Times and honorably witnessed by H.E. Senior Minister Ly Thuch, the First Vice President of CMAA and H.E. Datuk Eldeen Husaini Mohd Hashim, Ambassador of Malaysia to the Kingdom of Cambodia, and other dignitaries.\n“We know that humanitarian mine action is a precondition, not only for peace and security but also for poverty reduction and development,” said H. E. Ly Thuch. “There is no doubt in my mind that humanitarian mine action has contributed significantly to socio-economic development in Cambodia by making available safe land for local livelihood activities and sustainable economic development while also reducing casualties.”\n \n\n\n\n \n\nTo bring this landmine-free campaign and awareness for this to the people of Cambodia, MBCC and Khmer Times, with the kind cooperation and facilitation of Wing Bank, through their thousands of Wing locations and branches nationwide, are inking an MoU to raise Funds from throughout the country in a simple yet affordable campaign with the Theme of 4,000 KHR to clear 5 square meters of land.\n“I am confident that with the continuous generosity and goodwill from friends near and far, together we can make the vision of a landmine-free Cambodia a reality in the near future, “said Oknha Tan Khee Meng, President of MBCC. “Let us all give our fullest support to this campaign and play our part in making Cambodia a mine-free country by 2025.”\n“We are more than happy to do our part to help Cambodia to eliminate the terrible impact of landmines on people’s lives,” said Han Peng Kwang, CEO of Wing Bank, “Also, we hope that our contribution can help bring about positive changes to the community as people will have more land for farming and other development.”\nCambodia, with a population of approximately 16 million people, needs to have all arable land free from land mines to enable farmers to cultivate and provide food for the nation. Cambodia has the possibility of becoming a food basket for the region with its ample arable land and experienced farmers, comprising more than 75 per cent of the population.\nSince June 2022, MBCC and Khmer Times have raised more than $100,000 and assisted in handing back several villagers in Kong Pisei District back to their people who inhabit the once land mines infested area. This includes food kits for more than 1,000 people.\n“When I was involved with agriculture for close to five years, the land we were developing was littered with land mines and UXOs. It became a personal mission for me and for the past years of Khmer Times, which will be nine years in a week, to do something about this scrounge, help the people and the country to rid it of this menace once and for all,” said Mohan Bandam, Publisher of Khmer Times.\n \n\n\n\n \nWith this 4,000 KHR campaign, all parties, with the kind assistance of Wing Bank, hope that this affordable and meaningful campaign will draw the unflinching support of all Cambodians and make this campaign a huge success.\nAccording to CMAA, Cambodia needs almost $138 million to achieve its target of being mine-free, and this campaign will help, in some ways, to alleviate the burden of the Government in delivering land back to the population.\nFrom 1992 to March 2022, roughly 2,579 square kilometers of explosive hazard-contaminated land has been released for productive use such as agriculture, resettlement, roads, schools and other social infrastructure, leaving approximately 563 square kilometers of land yet to be cleared of land mines.",
    name: "WING",
    url: "https://www.wingbank.com.kh/en/wing-bank-mbcc-and-khmer-times-join-forces-to-raise-funds-for-a-landmine-free-cambodia/",
    image:
      "https://www.wingbank.com.kh/wp-content/uploads/2023/06/WC102565-1024x683.jpg",
    website: "WING",
    download_date: "2023-07-08",
    image_path:
      "imagesradar/9537f2da1a313fea17833dc11bfbeb4d829a6cab966f141f33372330ae6459bd.jpg",
  },
  {
    id: 15,
    date: "2023-06-12 00:00:00",
    title: "Enjoy 50% off on movie tickets with Wing Mastercard",
    content:
      "Promo Period:\n Jun 12, 2023 to Jul 31, 2023\nWing Bank and Major Cineplex are excited to announce a special promotion for all Wing Mastercard holders! From now until July 31, 2023, you can get 50% off movie tickets when you pay with your Wing Mastercard. To redeem this offer, present your Wing Mastercard at the ticket counters when you purchase your tickets. This offer is valid for all movies, all days of the week. Don’t miss out on this great opportunity to save money on your next movie night!\nApply for a Wing Mastercard today and start enjoying 50% off on movie tickets at Major Cineplex!\n \n ",
    name: "WING",
    url: "https://www.wingbank.com.kh/en/enjoy-50-off-on-movie-tickets-with-wing-mastercard/",
    image:
      "https://www.wingbank.com.kh/wp-content/uploads/2023/06/Master-Card-x-Wing-EN-Mobile.jpg",
    website: "WING",
    download_date: "2023-07-08",
    image_path:
      "imagesradar/87bfe597a935aa3ea724c5fe99a198b68441cc89053803467e38d9c19e699fbb.jpg",
  },
  {
    id: 20,
    date: "2023-03-15 00:00:00",
    title:
      "Signing Ceremony of Memorandum of Understanding on Strategic Partnership between Dragon Land Investment Co., Ltd. and Phillip Trustee (Cambodia) Co., Ltd. , and Phillip Bank Plc",
    content:
      "Phnom Penh, 15 March 2023 - Dragon Land Investment Co., Ltd. and Phillip Trustee (Cambodia) Co., Ltd., and Phillip Bank Plc sign a Memorandum of Understanding (MoU) to expand the overall scope of the market for products, services, and cooperation between Borey Dragon Land 598 and Phillip Trustee (Cambodia) Co., Ltd. and Phillip Bank Plc. In particular, attracting international investors to build real estate credibility in the Cambodian market. In addition, this strategic partnership aims to facilitate foreign clients to invest in Dragon Land Project with trustee service provided by Phillip Trustee as well as affordable housing loans provided by Phillip Bank. With this MOU, all local and foreign clients can enjoy up to 80% housing loans with Phillip Bank. In addition, Phillip Trustee could assist foreign buyers for the long-term official trustee service. \n \n ",
    name: "PHILLIP",
    url: "https://www.phillipbank.com.kh/en/articles/whats-new-2-whats-new/signing-ceremony-of-memorandum-of-understanding-on-strategic-partnership-between-dragon-land-investment-co-ltd-and-phillip-trustee-cambodia-co-ltd-and-phillip-bank-plc",
    image:
      "https://www.phillipbank.com.kh/albums/2023-03-16/YU44oBYf_album_image.jpg",
    website: "PHILLIP",
    download_date: "2023-07-10",
    image_path:
      "imagesradar/590ee8d4f8a114b4fcc224a02938e577e3e6aeee5b7661489b336b76b0a468c8.jpg",
  },
];

const DetailPromotion = () => {
    const [detailData, setDetailData] = useState(
      data.filter((item) => item.id === params.promotion)[0]
    );

    useEffect(() => {
      console.log(detailData);
    }, [detailData]);

    if (!detailData) return <div>loading...</div>;
  return (
    <div>
      {/* <p className="text-red-500 mt-10">Detail ID: {detailId}</p> */}
      <div className="w-full h-auto pt-20 mb-20">
        <div className="flex flex-col py-10 mx-5 md:mx-10 lg:mx-20">
          {/* {data.map((post, index) => ( */}
            <div key={index} className="w-full h-auto flex flex-col gap-2">
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
                        <h1 className="promotionName mt-8">
                          Weekly newsletter
                        </h1>
                        <p className="post-description">
                          No spam. Just the latest releases and tips,
                          interesting artiles, and exclusive interviews in your
                          inbox every week.
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
          {/* ))} */}

          {/* <PromotionOffer /> */}
        </div>
      </div>
    </div>
  );
};

export default DetailPromotion;
