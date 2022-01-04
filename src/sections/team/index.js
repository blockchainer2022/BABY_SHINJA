import "./style.css";
import Title from "../../components/title";

import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import Team4 from "../../assets/images/team4.png";
const data2 = [
  {
    icon: Team1,
    title: "Baby Shinja",
    text: "TBA soon.",
  },
  {
    icon: Team2,
    title: "Baby Shinja",
    text: "TBA soon.",
  },
  {
    icon: Team3,
    title: "Baby Shinja",
    text: "TBA soon.",
  },
  {
    icon: Team4,
    title: "Baby Shinja",
    text: "TBA soon.",
  },
];

const Team = () => {
  return (
    <div className="platforms py-20 bg-dark-500 min-h-screen">
      <div className="container">
        <Title title="Baby Shinja Team" backtext="TEAM" />
        <p className="text-white  font-bold text-lg text-center mt-6">
          All supported by the loving Captain Inu #InuForce community
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 mt-20">
          {data2.map((val, i) => (
            <div
              key={i}
              className="bg-transparent border-2 border-primary-500 text-center rounded-xl text-white py-8  px-4 cursor-pointer "
              data-aos="fade-up"
              data-aos-delay={`${300 * i}`}
            >
              <div className="flex justify-center">
                <img src={val.icon} alt="" />
              </div>
              <h6 className="text-3xl font-medium mt-6 text-primary-500">
                {val.title}
              </h6>
              <p className="text-sm font-light mt-6">{val.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="py-3  px-4 rounded-md bg-primary-500 font-bold">
            HALL OF FAME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
