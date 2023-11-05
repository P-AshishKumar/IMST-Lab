import "./AboutUsStyles.css";
import RecentNews from "./RecentNews";

function About() {
  return (
    <div className="about-container">
      <div className="reserach-padding">
        <div className="container-small">
          <div className="reserach-content">
            <h1 className="heading-large">Welcome to the IMST Laboratory</h1>
            <p className="research-para">
              Intelligent Modeling and Simulation, and Testing Laboratory (IMST)
              was founded in 2008, by Subu and Guo, with a core facility award
              by the Nebraska Research Initiative. The IMST laboratory conducts
              research to develop computational tools and platforms
              incorporating qualitative, and quantitative approaches for smart
              modeling, and analyses of complex problems across diverse domains
              including medical, education, and engineering domains. The
              laboratory has supported several computer science, engineering,
              and medical faculty and undergraduate and graduate student
              researchers through its projects, through funds from federal,
              state, and local agencies.
            </p>
          </div>
        </div>
      </div>

      {/* <RecentNews /> */}
    </div>
  );
}

export default About;
