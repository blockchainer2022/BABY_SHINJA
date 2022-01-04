/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import Instagram from "../../assets/images/insta.png";
import Telegram from "../../assets/images/tele.png";
import Twitter from "../../assets/images/twitter.png";
import Logo from "../../assets/images/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import "./style.css";
const Header = () => {
  const [show, setShow] = useState(false);

  const menuHandler = () => {
    setShow((prev) => !prev);
  };
  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="header text-white py-3 md:py-1">
      <div className="container flex justify-between items-center">
        <a className="block" href="/">
          <img src={Logo} alt="" className="w-48" />
        </a>
        <div className="md:flex items-center hidden ">
          <ul className="flex items-center">
            {linkList.map((v, i) => (
              <li key={i}>
                <a href={v.link} className="d-block p-4 px-5 font-semibold">
                  {v.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex ml-7">
            {socialList.map((v, i) => (
              <li key={i}>
                <a href={v.link} className="mx-4 py-4 d-block">
                  <img src={v.icon} alt="" className="w-6 mx-2" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className=" cursor-pointer text-2xl md:hidden "
          // onClick={menuHandler}
        >
          <img src={Telegram} alt="" className="w-8" />
        </button>
      </div>
      <div
        className={`mobile-menu md:hidden  ${show ? "active" : ""}`}
        ref={menuRef}
      >
        <div className=" text-right  px-4 py-4 text-2xl text-white">
          <span className="flex justify-end">
            <FaTimes onClick={menuHandler} />
          </span>
        </div>
        <ul className=" md:hidden">
          {linkList.map((val, i) => (
            <li key={i}>
              <a
                href={val.link}
                className="block p-3 font-medium"
                onClick={menuHandler}
              >
                {val.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex md:hidden">
          {socialList.map((v, i) => (
            <li key={i}>
              <a href={v.link} className="mx-4 py-4 d-block">
                <img src={v.icon} alt="" className="w-6 mx-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "Story",
    link: "#story",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "News",
    link: "#news",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

const socialList = [
  {
    icon: Instagram,
    link: "#",
  },
  {
    icon: Telegram,
    link: "#",
  },
  {
    icon: Twitter,
    link: "#",
  },
];
