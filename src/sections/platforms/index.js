import "./style.css";
import Title from "../../components/title";
import Education from "../../assets/images/education.png";
import Gaming from "../../assets/images/gaming.png";
import Blockchain from "../../assets/images/blockchain.png";
import { WhitePaper, Chart, Contracts, Report } from "./Icons";

const data = [
  {
    image: Education,
    title: "Education",
    text: "A new approach to crypto education and entertainment, offering comics including adventures of Baby Shinja, featuring crypto influencers & the latest news in the blockchain scene",
  },
  {
    image: Gaming,
    title: "Gaming",
    text: "The game will be a merging environment through PVP battle gaming and open-world exploration. It will be a crossover battle game; therefore, our goal is to partner with other successful Shiba Inu projects and merge all-powerful Shiba Inu entities under one pack.",
  },
  {
    image: Blockchain,
    title: "Blockchain",
    text: "We will be Starting to Devlop a Own Blockchain.",
  },
];

const data2 = [
  {
    icon: WhitePaper,
    title: "Whitepaper",
  },
  {
    icon: Contracts,
    title: " EthScan contract",
  },
  {
    icon: Chart,
    title: "DEX Tools Chart",
  },
  {
    icon: Report,
    title: "Audit Report",
  },
];

const Platforms = () => {
  return (
    <div className="platforms py-20 bg-dark-500 min-h-screen">
      <div className="container">
        <Title title="Baby Shinja’s Upcoming Platforms" backtext="PLATFORM" />
        <div className="grid grid-flow-row gap-y-10 mt-20">
          {data.map((val, i) => (
            <div key={i} className="bg-dark-600 p-8 rounded-md">
              <div className="flex items-center">
                <div>
                  <img src={val.image} alt="" />
                </div>
                <h4 className="text-primary-500 font-bold ml-4 text-4xl">
                  {val.title}
                </h4>
              </div>
              <p className="text-white text-base  font-light mt-6 capitalize">
                {val.text}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {data2.map((val, i) => (
            <div
              key={i}
              className="bg-dark-600 text-center rounded-xl text-white p-8 px-6 pb-10 cursor-pointer platform-card"
            >
              <div className="flex justify-center">
                <val.icon />
              </div>
              <h6 className="text-3xl font-medium mt-6">{val.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;
