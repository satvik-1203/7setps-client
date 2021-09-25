import React from "react";

import { IData } from "@Root/pages/index";

interface Props {
  data: IData;
}

const OurStory: React.FC<Props> = ({ data }) => {
  const { description, title } = data;
  return (
    <div className="py-5 px-5 ">
      <h1 className="text-center py-3">{title}</h1>
      {description.map((para, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
      ))}
      <div className="flex flex-col space-y-14 my-8">
        <div className="line h-[1px] bg-gray-400"></div>
        <div className="line h-[1px] bg-gray-400"></div>
      </div>
      <div className="text-2xl font-light text-center">
        Queries ? Clarification?
      </div>
      <button className="px-6 py-3 border-2 border-black text-xs tracking-widest my-4 mt-8">
        PING US
      </button>
    </div>
  );
};

export default OurStory;
