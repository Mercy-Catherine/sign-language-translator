import React from "react";

// Home page sections
import HeroSection from "../components/home/HeroSection";
import InfoSection from "../components/home/InfoSection";
import StepsSection from "../components/home/StepsSection";
import UploadSection from "../components/home/UploadSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

function HomePage() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <StepsSection />
      <UploadSection />
      <WhyChooseUs />
    </>
  );
}

export default HomePage;
