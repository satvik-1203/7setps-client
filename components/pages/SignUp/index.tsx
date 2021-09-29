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
            {inputs.map((input, index) => (
              <InputBox key={index} inputInfo={input} />
            ))}
          </div>
          <Button data={{ name: "Sign up", type: "submit" }} />
        </form>
        <div className="relative">
          <input
            id="test"
            name="test"
            type="text"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
            placeholder="john@doe.com"
          />
          <label
            htmlFor="test"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Email address
          </label>
        </div>
      </main>
    </div>
  );
};

export default index;
