import About from "../components/home/About";
import Hero from "../components/home/Hero";
import OurPrograms from "../components/home/OurPrograms";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <main className="w-screen">
        <Hero />
        <OurPrograms />
        <Testimonials />
        <About />
      </main>
    </>
  );
};

export default Home;
