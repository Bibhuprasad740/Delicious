import React from "react";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const WelcomeSection = () => {
  return (
    <section
      id="welcome"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
    >
      <TextSection />
      <ImageSection />
    </section>
  );
};

export default WelcomeSection;
