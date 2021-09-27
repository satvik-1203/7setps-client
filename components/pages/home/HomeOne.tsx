import React from "react";
import ArrowDown from "@Root/images/arrowDown";

interface Props {}

const HomeOne: React.FC<Props> = () => {
  return (
    <div className="parallax home1  h-screen relative">
      <a href="#ourStory">
        <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2">
          <ArrowDown />
        </div>
      </a>
    </div>
  );
};

export default HomeOne;
