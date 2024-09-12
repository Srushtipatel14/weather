import "../../css/home.css";
import baby from "../../images/baby.webp";

const About = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="right">
          <img src={baby} className="img1" alt="babyImage" />
        </div>
        <div className="left">
          <div className="subleft1">
            <p className="para">
              Hello{" "}
              <span style={{ color: "rgb(25 122 212)", fontWeight: "bold" }}>
                Friends
              </span>{" "}
            </p>
            <p className="para">I am a Software Devloper</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
