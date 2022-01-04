import { useState } from "react";
import "./style.css";
import Title from "../../components/title";
import Check from "../../assets/images/check.png";
import Shinja from "../../assets/images/roadmap-right.png";
const Roadmap = () => {
  const [currentActive, setCurrentActive] = useState(0);
  const roadmapData = [
    [
      " Launch Website",
      " Launch Socials",
      "Test-net Launch",
      "PancakeSwap Launch",
      "Audit",
      " Marketing",
    ],
    [
      "Litepaper",
      "AMAs",
      " Baby Shinja Warriors",
      "Social Ads",
      " Nobi Wallet Prototype",
    ],
    [
      "Staking",
      "NFTs",
      "Baby Shinja Game",
      "Exchanges R1",
      "Lbank",
      "Bitmart",
      "MEXC",
      "Gate",
    ],
    [
      "Exchanges R2",
      "Kucoin",
      "Okex",
      "Huobi",
      "Binance",
      "Nobi Wallet (Q2 2022)",
      "Nobi Blockchain Test-net (Q3 2022)",
      "Nobi Blockchain Main-net (Q4 2022)",
    ],
  ];
  return (
    <div className="py-20">
      <div className="container">
        <Title title="Baby Shinja Roadmap" backtext="ROADMAP" />
        <div className="border-b-2 border-primary-500 grid justify-start grid-flow-col mt-20">
          {[1, 2, 3, 4].map((val, i) => (
            <div
              key={val}
              onClick={() => setCurrentActive(i)}
              className={`${
                currentActive === i ? "bg-primary-500" : ""
              } py-3 px-3 sm:px-4 text-dark-300 text-xs sm:text-base font-bold max-w-max cursor-pointer transition-all duration-500`}
            >
              Phase-{val}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className=" bg-dark-500 p-6 py-8  mt-10 rounded-xl transition-all duration-500"
            data-aos="fade-right"
          >
            {roadmapData[currentActive].map((val, i) => (
              <div
                className="flex items-center mb-2 transition-all duration-500"
                key={i}
              >
                <span className="text-white mr-2">&bull;</span>
                <p className="text-white text-base sm:text-xl">{val}</p>
              </div>
            ))}
          </div>
          <div className="mt-10" data-aos="fade-left">
            <img src={Shinja} alt="" className="mx-auto max-w-xs w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
