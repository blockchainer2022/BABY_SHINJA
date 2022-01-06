import "./style.css";
const Title = ({
  title = "Meta Ninja’s Mission",
  backtext = "MISSION",
  black = false,
}) => {
  return (
    <div
      className="section-title w-full text-center mt-20"
      data-aos="fade-down"
    >
      <div
        className={`title-back ${black ? "text-black" : "text-primary-500"} `}
      >
        {backtext}
      </div>
      <h2
        className={`text-4xl capitalize sm:text-5xl font-medium text-bold ${
          black ? "text-black" : "text-primary-500"
        } `}
      >
        {title}
      </h2>
    </div>
  );
};

export default Title;
