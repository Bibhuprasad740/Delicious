import React from "react";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const WelcomeSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      {/* left side */}
      <TextSection />
      {/* right side */}
      <ImageSection />
    </section>
  );
};

export default WelcomeSection;
