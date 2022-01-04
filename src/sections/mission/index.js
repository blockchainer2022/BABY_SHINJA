import "./style.css";
import Title from "../../components/title";
import Image from "../../assets/images/mission-left.png";
const Mission = () => {
  return (
    <div className="py-20 mission">
      <div className="container">
        <div>
          <Title />
        </div>
        <div className=" grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-4 items-center mt-28">
          <div>
            <img src={Image} alt="" className="mx-auto lg:mx-0" />
          </div>
          <div className="text-center lg:text-left max-w-xl lg:max-w-auto mx-auto lg:mx-0 w-full lg:w-auto">
            <p className="text-base text-dark-300">
              Baby Shinja is your leader within the Inu ecosystem and strives to
              build trust and welfare for his community. His target is to build
              a self-feeding ecosystem that fights against intruders and allows
              holders to conquer the Inu metaverse, benefiting from winning and
              earning rewards while saving the world.
            </p>
            <p className="text-base mt-6 text-dark-300">
              Baby Shinja seeks to partner up with other Inu tokens and
              influencers by showing its strengths through comics, merchandise,
              and innovative strategies.
            </p>
            <button className=" bg-primary-500 text-dark-300 py-2 px-6 mt-8 rounded-md font-bold">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
