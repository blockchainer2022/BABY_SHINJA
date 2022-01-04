import "./style.css";
import Shinja from "../../assets/images/banner-right.png";
import uniswap from "../../assets/images/uniswap.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 items-center gap-2 py-28">
        <div
          className="text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
        >
          <h2 className="uppercase text-2xl text-primary-400">Baby Shinja</h2>
          <h1 className="uppercase text-5xl text-white font-bold">
            <span className="text-primary-500">DEFENDER</span>
            <br />
            <span>of The INU METAVERSE</span>
          </h1>
          <div className="grid  sm:grid-flow-col gap-4 mt-10 justify-center lg:justify-start">
            <button className="bg-white max-w-max text-dark-300 border-primary-500 border uppercase text-base py-3 px-10 font-semibold rounded-md mx-auto sm:mx-0">
              Read Woofpaper v1
            </button>
            <button className="bg-primary-500 max-w-max text-white border-primary-500 border uppercase text-base py-3 px-8 font-semibold rounded-md  mx-auto sm:mx-0">
              Buy on uniswap
            </button>
          </div>
        </div>
        <div className="lg:order-2" data-aos="fade-left">
          <img src={Shinja} alt="" className=" max-w-sm w-full mx-auto" />
          <button className="flex items-center banner-btn">
            <img src={uniswap} alt="" />
            <p>Buy On Uniswap</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
