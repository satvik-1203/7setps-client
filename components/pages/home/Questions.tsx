import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface Props {
  data: { question: string; answer: string };
  state: boolean;
  handleQuestionState: (index: number) => void;
  id: number;
}

const rotateAnimation = {
  initial: {
    rotate: "0deg",
  },
  animate: {
    rotate: "180deg",
  },
};

const Questions: React.FC<Props> = ({
  data,
  state,
  id,
  handleQuestionState,
}) => {
  const { answer, question } = data;
  const controls = useAnimation();

  if (state) controls.start("animate");
  if (!state) controls.start("initial");

  return (
    <motion.div
      layout
      onClick={() => handleQuestionState(id)}
      className="border-gray-300 border-b-[0.5px] mt-7"
    >
      <motion.div className="text-xl flex justify-between items-center" layout>
        <span>{question}</span>
        <motion.span variants={rotateAnimation} animate={controls}>
          <Image width={20} height={20} src="/arrowdown.svg" />
        </motion.span>
      </motion.div>
      {state && (
        <motion.div layout className="text-sm pr-8 text-gray-600 my-4">
          {answer}
        </motion.div>
      )}
      <motion.div layout className=" mt-7"></motion.div>
    </motion.div>
  );
};

export default Questions;
