import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const LandingPage: React.FC = () => {
  return (
    <>
      <main className="min-h-screen mt-19s">
        <Hero />
        <Services />
      </main>
    </>
  );
};

export default LandingPage;
