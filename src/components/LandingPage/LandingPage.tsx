import About from "./About/About";
import Hero from "./Hero/Hero";
import Impact from "./Impact/Impact";
import Services from "./Services/Services";

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen mt-19s">
        <Hero />
        <Services />
        <About />
        <Impact />
      </main>
    </>
  );
};

export default LandingPage;
