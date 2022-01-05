import "./style.css";
import Shinja from "../../assets/images/banner-right.png";
import uniswap from "../../assets/images/uniswap.png";
import Instagram from "../../assets/images/insta.png";
import Telegram from "../../assets/images/tele.png";
import Twitter from "../../assets/images/twitter.png";
const socialList = [
  {
    icon: Instagram,
    link: "https://instagram.com/babyshinja?utm_medium=copy_link",
  },
  {
    icon: Telegram,
    link: "https://t.me/babyshinja",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/babyshinja?s=21",
  },
];
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
            <span>OF THE DOG UNIVERSE</span>
          </h1>
          <div className="grid  sm:grid-flow-col gap-4 mt-10 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1iUnPiyECP2I88V7EsXUfaKGBxSxJxPnw"
              target="_blank"
              rel="noreferrer"
              className="bg-white max-w-max text-dark-300 border-primary-500 border uppercase text-base py-3 px-10 font-semibold rounded-md mx-auto sm:mx-0"
            >
              READ LITEPAPER
            </a>
            <button className="bg-primary-500 max-w-max text-white border-primary-500 border uppercase text-base py-3 px-8 font-semibold rounded-md  mx-auto sm:mx-0">
              VIEW CHART
            </button>
          </div>
        </div>
        <div className="lg:order-2" data-aos="fade-left">
          <img src={Shinja} alt="" className=" max-w-sm w-full mx-auto" />
          <button className="flex items-center banner-btn">
            <img src={uniswap} alt="" />
            <p>Buy On PancakeSwap</p>
          </button>
          <ul className="flex justify-center  -mt-5">
            {socialList.map((v, i) => (
              <li key={i}>
                <a
                  href={v.link}
                  className="mx-4 py-4 d-block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={v.icon} alt="" className="w-6 mx-2" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
