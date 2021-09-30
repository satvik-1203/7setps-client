import React, { useState } from "react";

import InputBox from "@Components/shared/InputBox";
import Button from "@Components/shared/Button";
import IInput from "@Interfaces/input.interface";

interface Props {}

const index: React.FC<Props> = () => {
  const [formStates, setFormStates] = useState({
    email: "",
    password: "",
  });

  const inputs: IInput[] = [
    {
      name: "email",
      placeholder: "example@email.com",
      type: "email",
      stateName: "email",
      value: formStates.email,
    },
    {
      name: "password",
      placeholder: "password",
      type: "password",
      stateName: "password",
      value: formStates.password,
    },
  ];

  const handleFormState = (stateName: string, value: string) => {
    setFormStates((prevState) => ({ ...prevState, [stateName]: value }));
  };

  return (
    <div className="min-h-screen flex justify-center items-center max-w-[800px] mx-auto bg-white">
      <main className="w-3/4">
        <form>
          <div className="flex flex-col space-y-7 w-full">
            {inputs.map((input, index) => (
              <InputBox
                key={index}
                inputInfo={input}
                handleFormState={handleFormState}
              />
            ))}
          </div>
          <Button data={{ name: "Login", type: "submit" }} />
        </form>
      </main>
    </div>
  );
};

export default index;
