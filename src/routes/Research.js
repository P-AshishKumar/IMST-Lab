import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ResearchImage from "../assets/HomePage.jpg";
import Project from "../components/Project";

function Research() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-low"
        heroImg={ResearchImage}
        // title="Welcome to our Lab"
        // text="something about the lab"
      />
      <Project />
    </>
  );
}

export default Research;
