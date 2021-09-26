import React, { useState } from "react";
import { IHomeTwo } from "@Root/pages/index";
import { AnimateSharedLayout } from "framer-motion";
import Questions from "./Questions";

interface Props {
  data: IHomeTwo;
}

const HomeTwoData: React.FC<Props> = ({ data }) => {
  const [questionState, setQuestionState] = useState([true, false, false]);

  const handleQuestionState = (index: number) => {
    const states = questionState.map((_) => false);
    states[index] = true;
    setQuestionState(states);
  };
  return (
    <div>
      <div
        className="px-12 py-4 mb-16 text-lg italic"
        dangerouslySetInnerHTML={{ __html: data.quote }}
      />
      <div className=" px-4 ">
        {data.questions.map((question, index) => (
          <Questions
            key={index}
            state={questionState[index]}
            data={question}
            handleQuestionState={handleQuestionState}
            id={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeTwoData;
