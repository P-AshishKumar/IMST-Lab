import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import HomeImge from "../assets/HomePageBackGround.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={HomeImge} />
      <About />
    </>
  );
}

export default Home;
