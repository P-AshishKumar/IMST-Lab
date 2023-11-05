import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import LabImg from "../assets/LabImage.jpeg";
import Footer from "../components/Footer";
import Members from "../components/Members";
import About from "../components/About";
import HomeImge from "../assets/HomePageBackGround.jpg";

function Lab() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={HomeImge} />
      <About />
      <Hero
        cName="hero-mid"
        heroImg={LabImg}
        // title="Welcome to our Lab"
        // text="something about the lab"
      />
      <Members />
    </>
  );
}

export default Lab;
