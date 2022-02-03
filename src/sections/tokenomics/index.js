import "./style.css";
import Title from "../../components/title";
import Fairlaunch from "../../assets/images/fairlaunch.png";
import Safe from "../../assets/images/shield.png";
import Wallet from "../../assets/images/wallet.png";
const data2 = [
  {
    icon: Fairlaunch,
    title: "Fair Launch",
    text: "We believe in fair launching when it comes to Token launches. This means NO Presales, No team tokens and providing adequate notice for buyers ahead of launch to purchase $NINJA.",
  },
  {
    icon: Safe,
    title: "100% Safe",
    text: "Liquidity locked for over a year with team Finance, ensuring your holdings remain 100% safe whether trading short term or holding long term",
  },
  {
    icon: Wallet,
    title: "No Dev Wallet",
    text: "We believe the core team's primary focus should be working for our holders to deliver. 4% Marketing tax helps keep the team delivering.",
  },
];

const Tokenomics = () => {
  return (
    <div className=" py-20 bg-dark-500 ">
      <div className="container">
        <Title title="Meta Ninja Tokenomics" backtext="TOKENOMICS" />

        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 mt-20">
          {data2.map((val, i) => (
            <div
              key={i}
              className="bg-dark-600 text-center rounded-xl text-white py-16 p-8 px-6 pb-10 cursor-pointer "
              data-aos="fade-up"
              data-aos-delay={`${300 * i}`}
            >
              <div className="flex justify-center">
                <img src={val.icon} alt="" />
              </div>
              <h6 className="text-3xl font-medium mt-6">{val.title}</h6>
              <p className="text-sm font-light mt-6">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
