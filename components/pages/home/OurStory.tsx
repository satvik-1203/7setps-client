import React from "react";

import { IOurStory } from "@Root/pages/index";

interface Props {
  data: IOurStory;
}

const OurStory: React.FC<Props> = ({ data }) => {
  const { description, title } = data;
  return (
    <div className="py-5 wordSpacing px-5   spacing">
      <h1 className="text-center py-3">{title}</h1>
      {description.map((para, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
      ))}
      <div className="flex flex-col space-y-14 my-8">
        <div className="line h-[1px] bg-gray-400"></div>
        <div className="line h-[1px] bg-gray-400"></div>
      </div>
      <div className="flex flex-col relative md:flex-row md:justify-end">
        <div className="text-2xl font-light text-center md:absolute md:left-0 md:transform md:translate-x-full">
          Queries ? Clarification ?
        </div>

        <div>
          <button className="px-6 py-3 border-2 xl:border mr-20 border-black text-xs tracking-widest my-4 mt-8 md:mt-0 ">
            PING US
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
