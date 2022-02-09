import Logo from "../../assets/images/footer-logo.png";
import Instagram from "../../assets/images/insta.png";
import Telegram from "../../assets/images/tele.png";
import Twitter from "../../assets/images/twitter.png";
// import { FaAngleDown } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./style.css";
const account = "0xebf963a8F11631944dE83E2D18773454EF45aE6C";
const Footer = () => {
  return (
    <>
      <div className="pb-10  bg-dark-500 mt-40">
        <ClipBoard />
        <div className="container">
          <div className="grid grid-flow-col justify-start gap-8 items-center">
            <div>
              <img src={Logo} alt="" />
              <p className="font-medium text-white mt-2">
                Meta Ninja is an Defender of The Dog Universe
              </p>
            </div>
            {/* <div className=" col-span-2">
              <h3 className="text-primary-500  font-bold text-2xl">
                Get In Touch
              </h3>
              <p className="font-medium text-white mt-5 text-sm">
                Want to stay up to date With the Meta Ninja? Feel free to Put
                the email address and hit a Subscribe button to stay Up To Date
                with Us.
              </p>
            </div> */}
            <div className="">
              <h3 className="text-primary-500  font-bold text-2xl">
                Follow Us
              </h3>
              <ul className="grid grid-flow-col gap-x-4 mt-5 justify-start">
                {socialList.map((v, i) => (
                  <li key={i}>
                    <a
                      href={v.link}
                      className="py-4 d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={v.icon} alt="" className="w-6" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div>
            <div className="input-wrapper border border-primary-500 rounded-md  max-w-sm flex justify-between mx-auto w-full mt-7">
              <input
                type="text"
                className="flex-1 bg-transparent focus:outline-none ml-2 text-white w-4/6 sm:w-auto"
                placeholder="Email"
              />
              <button className="py-1 px-4 rounded-md font-medium bg-primary-500">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        <div className="text-center bg-dark-400 text-white py-4 mt-10">
          <p>Copyrights © 2021 Meta Ninja</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
const socialList = [
  {
    icon: Instagram,
    link: "https://instagram.com/metaninjaofficial",
  },
  {
    icon: Telegram,
    link: "https://t.me/metaninjaofficial",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/metaninjacoin",
  },
];

const ClipBoard = () => (
  <div
    className="bg-primary-500 rounded-2xl  py-4 lg:py-10 px-4 lg:px-10 xl:px-14 copy-board shadow-xl w-11/12 max-w-3xl mx-auto"
    style={{ transform: "translateY(-50%)" }}
  >
    <h4 className="font-bold text-center text-lg mb-4">Contract Address</h4>
    <div className="bg-white rounded-xl p-1 flex items-center justify-between">
      <p className="font-medium text-gray-700 sm:hidden ml-2">
        {account.slice(0, 8) + "..." + account.slice(account.length - 5)}
      </p>
      <p className="hidden sm:block font-medium text-gray-700 ml-2">
        {account}
      </p>
      <CopyToClipboard text={account} onCopy={() => alert(`${account} copied`)}>
        <button className="rounded-xl lg:pl-8 py-3 px-4 bg-black text-white font-semibold text-xl">
          Copy Address
        </button>
      </CopyToClipboard>
    </div>
  </div>
);
