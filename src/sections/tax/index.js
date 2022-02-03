import Shinja from "../../assets/images/tax.png";
import Title from "../../components/title";
import Elipse from "../../assets/images/Ellipse.png";
import "./style.css";
const Tax = () => {
  return (
    <div className="bg-dark-500 py-20 tax">
      <img src={Elipse} alt="" className="ellipse" data-aos="fade-right" />
      <div className="container">
        <div>
          <Title title="Meta Ninja Tax" backtext="TAX" />
        </div>
        <div className="grid gap-y-10 md:grid-cols-2 mt-40 items-center relative z-10">
          <div className="" data-aos="fade-right" data-aos-delay="300">
            <img
              src={Shinja}
              alt=""
              className="max-w-xs h-auto mx-auto w-full"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-8" data-aos="fade-left">
            <TextBox />
            <TextBox text1="4%" text2="Liquidity" />
            <TextBox text1="4%" text2="Marketing" />
            <TextBox
              text1="2%"
              text2="Manual BuyBack ( Tokens Received from Manual BuyBack will Be Burned ) / Or used for stacking"
            />
            <TextBox
              text1="1%"
              text2="Auto BuyBack ( To Maintain Stability of Coin)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tax;

const TextBox = ({ text1 = "4%", text2 = "Rewards to Holders IN BUSD" }) => (
  <div className="text-center md:text-left">
    <h3 className=" text-7xl text-primary-500 font-bold">{text1}</h3>
    <p className="text-white font-medium  text-lg">{text2}</p>
  </div>
);
