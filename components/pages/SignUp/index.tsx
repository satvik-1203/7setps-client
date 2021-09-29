import React from "react";
import IInput from "@Interfaces/input.interface";
import InputBox from "@Components/shared/InputBox";
import Button from "@Components/shared/Button";

interface Props {}

const inputs: IInput[] = [
  {
    id: "username",
    name: "username",
    placeholder: "Username",
    type: "text",
  },
  {
    id: "email",
    name: "email",
    placeholder: "example@email.com",
    type: "email",
  },
  {
    id: "password",
    name: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    id: "confirm password",
    name: "confirm password",
    placeholder: "Confirm Password",
    type: "password",
  },
];

const index: React.FC<Props> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center max-w-[800px] mx-auto bg-white">
      <main className="w-3/4">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex flex-col space-y-7 w-full">
            {inputs.map((input) => (
              <InputBox inputInfo={input} />
            ))}
          </div>
          <Button data={{ name: "Sign up", type: "submit" }} />
        </form>
      </main>
    </div>
  );
};

export default index;