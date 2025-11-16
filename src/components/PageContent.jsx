import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const PageContent = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-between mr-10">
        <LeftContent />
        {/* <RightContent /> */}
      </div>
    </div>
  );
};

export default PageContent;
