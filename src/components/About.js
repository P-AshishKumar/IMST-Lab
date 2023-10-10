import "./AboutUsStyles.css";
import RecentNews from "./RecentNews";

function About() {
  return (
    <div className="about-container">
      <div className="card">
        <div className="about-text">
          <div className="content-left">
            <h1 className="heading-large"> Our Lab</h1>
          </div>
          <div className="content-right">
            <p>
              Our lab is part of McGill University’s Department of Psychiatry
              and the McGill University Health Centre’s (MUHC) BRaIN research
              program. Together, this provides an environment with
              state-of-the-art facilities and colleagues with diverse areas of
              expertise.
            </p>
          </div>
        </div>
      </div>
      <div className="reserach-padding">
        <div className="container-small">
          <div className="reserach-content">
            <h1 className="heading-large">Reserach</h1>
            <p className="research-para">
              We are interested in how early life experiences, temperamental
              traits, and neurobiology intersect to influence the development of
              addictions and addiction-related disorders. Our working hypotheses
              embrace dimensional perspectives and test whether the studied risk
              factors are disease specific or transdiagnostic.
              <br />
              <br />
              Influential work has included the development and validation of a
              new method to rapidly decrease dopamine synthesis, the first
              evidence that people at risk for addictions exhibit altered
              dopamine responses when they take drugs, and the demonstration of
              human neuroplasticity following drug use and stressful life
              &nbsp;events.
              <br />
              <br />
              Most of these studies are conducted in people. They benefit from
              functional neuroimaging facilities at the Montreal Neurological
              Institute (MNI) and collaborations with colleagues at McGill,
              Université de Montréal and Université Laval who specialize in
              longitudinally followed cohorts. Together, this allows us to (i)
              conduct cross-sectional studies in volunteers from the general
              community and (ii) integrate prospectively acquired
              biopsychosocial information from youth who have been followed
              since birth.&nbsp;
            </p>
          </div>
        </div>
      </div>

      <RecentNews />
    </div>
  );
}

export default About;
